# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

admin = User.create!({
                         email: "wizzart@gmail.com",
                         password: "haslo123",
                         created_at: Time.zone.now,
                         updated_at: Time.zone.now,
                         remember_created_at: Time.zone.now,
                         last_sign_in_at: Time.zone.now,
                         current_sign_in_ip: "127.0.0.1",
                         last_sign_in_ip: "127.0.0.1",
                         sign_in_count: "5"
})
