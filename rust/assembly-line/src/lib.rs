pub fn production_rate_per_hour(speed: u8) -> f64 {
    let produced_each_hour = 221;
    let success_rate: f64;
    if speed <= 4 {
        success_rate = 1.0
    } else if speed <= 8 {
        success_rate = 0.9
    } else {
        success_rate = 0.77
    }
    return f64::from(speed) * f64::from(produced_each_hour) * success_rate;
}

pub fn working_items_per_minute(speed: u8) -> u32 {
    (production_rate_per_hour(speed) / 60.0) as u32
}
