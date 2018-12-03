export default class Request {
    constructor(methodType, url) {
        this.methodType = methodType;
        this.url = url;
        return new Proxy(this, {
            get: function(target, name) {
                console.log(`Proxy info: ${name} - ${target[name]}`);
                return target[name];
            },
            set: function(target, name, value) {
                target[name] = value;
            },
        });
    }

    perform() {
        if (this.methodType === "GET") {
            return fetch(this.url);
        }
    }
}