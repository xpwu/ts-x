import {ConsoleLogger as Log} from ".."


test("debug", async ()=>{
	Log.w.debug(Log.f.Debug("tag", "test debug log"))
})
