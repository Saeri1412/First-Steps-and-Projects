function logType(i) {
    if (typeof i === "number") {
        console.log("number!");
    } else if (typeof i === "string") {
        console.log("string!");
    } else if (typeof i === "boolean") {
        console.log("boolean!");
    } else if (typeof i === "bigint") {
        console.log("bigint!");
    } else if (typeof i === "object") {
        console.log("object!");
    } else if (typeof i === "function") {
        console.log("function");
    } else if (i === null) {
        console.log("null!");
    } else if (typeof i === "undefined") {
        console.log("undefined!");
    } else if (Array.isArray(i) === true) {
        console.log("array!");
    } else (i === "") {
        console.log("I have no idea!");
}
}

logType(null);
