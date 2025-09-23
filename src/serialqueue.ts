

export class SerialQueue<T> {
	private buffer: T[] = []
	private processor: ()=>Promise<void>
	private processing = false

	constructor(consumer: (data: T)=> Promise<void>) {
		this.processor = async ()=>{
			if (this.processing) {
				return
			}
			this.processing = true

			let d: T|undefined
			while ((d = this.buffer.pop()) !== undefined) {
				await consumer(d)
			}

			this.processing = false
		}
	}

	dispatch(data: T) {
		this.buffer.push(data)
		this.processor().then()
	}
}