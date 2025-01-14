# JavaScript Type Coercion Bug
This repository demonstrates a subtle bug in a JavaScript function that involves type coercion with null values. The function `foo` adds two numbers but returns null if either input is null. The bug arises due to potential unexpected behavior when comparing different types using the strict equality operator (`===`).

## Bug Description
The provided JavaScript function `foo` adds two numbers. However, it uses strict equality (`===`) to check for null values. Strict equality does not perform type coercion, which can lead to unexpected behavior when comparing numbers to null. 

## Solution
The solution addresses this issue by performing explicit type checking and conversion before the addition operation. This ensures that values are handled appropriately regardless of their type.