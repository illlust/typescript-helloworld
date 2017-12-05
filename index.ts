// import * as express from "express";
// import { Server, Path, GET, PathParam } from "typescript-rest";

// @Path("/hello")
// class HelloService {
//     @Path(":name")
//     @GET
//     sayHello( @PathParam('name') name: string): string {
//         // return "Hello " + name;
//         // return JSON.parse('{"hello": "world"}');
//         let jsonString = JSON.stringify({ name: name, a: "한글", b: "eng", c: true, d: { e: 1, f: [1, 2] } }, null, 4); // Indented 4 spaces
//         // return jsonString;
//         return JSON.parse(jsonString);
//     }
// }

// let app: express.Application = express();
// Server.buildServices(app);

// app.listen(3000, function () {
//     console.log('Rest Server listening on port 3000!');
// });

// // REQ http://localhost:3000/hello/world
// // RES {"name":"world","a":"한글","b":"eng","c":true,"d":{"e":1,"f":[1,2]}}

// function bindToThis() {
// 	return function(target, property, descriptor: PropertyDescriptor) {
// 		const f = descriptor.value;
//     	console.log('decorating and this is', this);
//     	descriptor.value = function() {
// 			console.log('calling and this is', this);
//       		f.call(this);
//     	};
//   	};
// }

class Startup {
    public static main(): number {
        console.log('Hello World');
        return 0;
    }
}

Startup.main();
