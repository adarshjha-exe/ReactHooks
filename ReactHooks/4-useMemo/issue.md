# useMemo

- Everytime we change the theme, prime number calculation is happening again and again, is it really necessary?
- And after 6 digits calculating the prime is the time consuming task, so it delay the toggle effect as well

- what is our input is 1 , in that case there is no performance benefit, useMemo is only beneficial when the calculation is expensive and the input hasn't changed
