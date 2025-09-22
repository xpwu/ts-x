
import type {Config} from 'jest';


const config: Config = {
	preset: "ts-jest",
	testRegex: "test/(.+)\\.test\\.(tsx?)$",
};

export default config;
