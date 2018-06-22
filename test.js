function repeater(msg) {
    for (i = 1; i < 10; i++) {
        console.log(msg);
    }
}
message = "Hello world";
repeater(message);
message = "Bye World";
repeater(message);