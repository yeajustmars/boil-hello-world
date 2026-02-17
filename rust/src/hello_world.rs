fn main() {
    println!("Hello boiled Rust!");

    print_welcome_message();
}

pub fn print_welcome_message() {
    // This variable is interpolated by
    // Boilermaker at build time, and its value is taken from the `boilermaker.toml` file.
    let interpolated_message = "{{welcome_message}}";
    println!("{interpolated_message}");
}
