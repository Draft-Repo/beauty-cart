<?php

namespace Database\Factories;

use App\Models\Customer;
use Illuminate\Database\Eloquent\Factories\Factory;


class CustomerFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Customer::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->title,
            'firstname' => $this->faker->firstname,
            'lastname' => $this->faker->lastname,
            'email' => $this->faker->unique()->safeEmail,
            'mobile' => $this->faker->e164PhoneNumber,
            'phone' => $this->faker->phoneNumber,
            'balance' => $this->faker->numberBetween($min = -5000, $max = 100000),
            'house' => $this->faker->buildingNumber,
            'road' => $this->faker->streetName,
            'village' => $this->faker->cityPrefix,
            'postoffice' => $this->faker->secondaryAddress,
            'area' => $this->faker->streetSuffix,
            'city' => $this->faker->city,
            'district' => $this->faker->state,
            'postalcode' => $this->faker->postcode,
            'address' => $this->faker->address,
            'dob' => $this->faker->date($format = 'Y-m-d', $max = 'now'),
            'photo'=>  $this->faker->imageUrl($width = 200, $height = 200),

        ];
    }
}
