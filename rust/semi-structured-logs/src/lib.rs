// This stub file contains items that aren't used yet; feel free to remove this module attribute
// to enable stricter warnings.
#![allow(unused)]

/// various log levels
#[derive(Clone, PartialEq, Eq, Debug)]
pub enum LogLevel {
    Info,
    Warning,
    Error,
    Debug,
}
/// primary function for emitting logs
pub fn log(level: LogLevel, message: &str) -> String {
    let result = match level {
        LogLevel::Info => info(message),
        LogLevel::Warning => warn(message),
        LogLevel::Error => error(message),
        LogLevel::Debug => "[DEBUG]: ".to_owned() + message,
    };
    result
}
pub fn info(message: &str) -> String {
    "[INFO]: ".to_owned() + message
}
pub fn warn(message: &str) -> String {
    "[WARNING]: ".to_owned() + message
}
pub fn error(message: &str) -> String {
    "[ERROR]: ".to_owned() + message
}
