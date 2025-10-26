import { Problem, CodeSnippets, Language, UserProfile, Level } from './types';

export const LANGUAGES: Language[] = ['C'];
export const LEVELS: Level[] = ['Loops', 'Arrays', 'Strings', 'Functions'];

export const ADMIN_PASSWORD = '1234';

export const PREDEFINED_USERS: UserProfile[] = [
  { id: 'admin', name: 'Admin User', picture: `https://api.dicebear.com/8.x/initials/svg?seed=Admin`, role: 'admin' },
  { id: 'veera', name: 'Veera', picture: `https://api.dicebear.com/8.x/initials/svg?seed=Veera`, role: 'user' },
  { id: 'testuser1', name: 'Test User 1', picture: `https://api.dicebear.com/8.x/initials/svg?seed=Test_User`, role: 'user' },
  { id: 'student42', name: 'Student 42', picture: `https://api.dicebear.com/8.x/initials/svg?seed=Student`, role: 'user' }
];

export const TWO_SUM_PROBLEM: Problem = {
  id: 1,
  title: '1. Two Sum',
  difficulty: 'Easy',
  level: 'Arrays',
  description: `
    Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.
    <br/><br/>
    You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the <em>same</em> element twice.
    <br/><br/>
    You can return the answer in any order.
  `,
  examples: [
    {
      input: 'nums = [2, 7, 11, 15], target = 9',
      output: '[0, 1]',
      explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
    },
    {
      input: 'nums = [3, 2, 4], target = 6',
      output: '[1, 2]',
    },
    {
      input: 'nums = [3, 3], target = 6',
      output: '[0, 1]',
    },
  ],
  constraints: [
    '`2 <= nums.length <= 10^4`',
    '`-10^9 <= nums[i] <= 10^9`',
    '`-10^9 <= target <= 10^9`',
    '<strong>Only one valid answer exists.</strong>',
  ],
};

export const THREE_SUM_PROBLEM: Problem = {
    id: 2,
    title: '2. 3Sum',
    difficulty: 'Medium',
    level: 'Arrays',
    description: `
      Given an integer array nums, return all the triplets \`[nums[i], nums[j], nums[k]]\` such that \`i != j\`, \`i != k\`, and \`j != k\`, and \`nums[i] + nums[j] + nums[k] == 0\`.
      <br/><br/>
      Notice that the solution set must not contain duplicate triplets.
    `,
    examples: [
        {
            input: 'nums = [-1,0,1,2,-1,-4]',
            output: '[[-1,-1,2],[-1,0,1]]'
        },
        {
            input: 'nums = [0,1,1]',
            output: '[]'
        },
        {
            input: 'nums = [0,0,0]',
            output: '[[0,0,0]]'
        }
    ],
    constraints: [
        '`3 <= nums.length <= 3000`',
        '`-10^5 <= nums[i] <= 10^5`'
    ]
};

const AVERAGE_OF_ARRAY: Problem = {
  id: 3,
  title: '3. Average of an Array',
  difficulty: 'Easy',
  level: 'Arrays',
  description: 'Given an array of integers, calculate and return the average of its elements. The result should be an integer (integer division).',
  examples: [{ input: 'nums = [1, 2, 3, 4, 5]', output: '3' }],
  constraints: ['`1 <= nums.length <= 1000`', '`0 <= nums[i] <= 1000`']
};

const FIND_MAXIMUM: Problem = {
  id: 4,
  title: '4. Find Maximum Element',
  difficulty: 'Easy',
  level: 'Arrays',
  description: 'Given an array of integers, find and return the largest element in the array.',
  examples: [{ input: 'nums = [2, 52, 86, 489, 21]', output: '489' }],
  constraints: ['`1 <= nums.length <= 1000`', '`-10^5 <= nums[i] <= 10^5`']
};

const REVERSE_ARRAY: Problem = {
  id: 5,
  title: '5. Reverse an Array',
  difficulty: 'Easy',
  level: 'Arrays',
  description: 'Given an array of integers, reverse its elements and return the reversed array.',
  examples: [{ input: 'nums = [1, 2, 3, 4, 5]', output: '[5, 4, 3, 2, 1]' }],
  constraints: ['`1 <= nums.length <= 1000`']
};

const IS_SORTED: Problem = {
  id: 6,
  title: '6. Check if Array is Sorted',
  difficulty: 'Easy',
  level: 'Loops',
  description: `
    Your task is to check if a given array of integers is sorted in <strong>non-decreasing order</strong>.
    <br/><br/>
    "Non-decreasing" means that each element must be greater than or equal to the element that comes before it.
    <br/><br/>
    The function should return <code>1</code> if the array is sorted and <code>0</code> otherwise.
  `,
  examples: [
    { input: 'nums = [1, 2, 3, 4, 5]', output: '1', explanation: 'Each element is greater than the previous one.' },
    { input: 'nums = [5, 2, 3, 4, 1]', output: '0', explanation: 'The array is not in sorted order.' },
    { input: 'nums = [1, 1, 2, 3, 3]', output: '1', explanation: 'The array is sorted because elements can be equal.' }
  ],
  constraints: ['`1 <= nums.length <= 1000`']
};

const REMOVE_DUPLICATES: Problem = {
  id: 7,
  title: '7. Remove Duplicates',
  difficulty: 'Easy',
  level: 'Arrays',
  description: 'Given a sorted array of integers, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Return the new length of the array.',
  examples: [{ input: 'nums = [1, 1, 2, 2, 3]', output: '3 (The array becomes [1, 2, 3, _, _])' }],
  constraints: ['`1 <= nums.length <= 1000`', 'The array is sorted in non-decreasing order.']
};

const SECOND_LARGEST: Problem = {
  id: 8,
  title: '8. Second Largest Element',
  difficulty: 'Medium',
  level: 'Arrays',
  description: 'Given an array of unique integers, find and return the second largest element in the array.',
  examples: [{ input: 'nums = [77, 96, 85, 12, 425, 525]', output: '425' }],
  constraints: ['`2 <= nums.length <= 1000`', 'All elements are unique.']
};

const LEFT_ROTATE: Problem = {
    id: 9,
    title: '9. Left Rotate Array',
    difficulty: 'Easy',
    level: 'Arrays',
    description: 'Given an array of integers and a number `k`, rotate the array to the left by `k` steps.',
    examples: [{ input: 'nums = [1, 2, 3, 4, 5], k = 2', output: '[3, 4, 5, 1, 2]' }],
    constraints: ['`1 <= nums.length <= 1000`', '`0 <= k < nums.length`']
};

const COUNT_OCCURRENCES: Problem = {
    id: 10,
    title: '10. Number of Occurrences',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      Your task is to search through an array of integers to find out how many times a specific <strong>target number</strong> appears.
      <br/><br/>
      You need to loop through the array, check each element, and keep a count of every time you find the target. Finally, return the total count.
    `,
    examples: [
      { input: 'nums = [4, 8, 9, 6, 8, 5, 7, 6], target = 8', output: '2', explanation: 'The number 8 appears twice in the array.' },
      { input: 'nums = [1, 2, 3, 4, 5], target = 6', output: '0', explanation: 'The target number 6 is not present in the array.' },
      { input: 'nums = [7, 7, 7, 7], target = 7', output: '4', explanation: 'All elements in the array are the target number.' }
    ],
    constraints: ['`1 <= nums.length <= 1000`']
};

const REPLACE_PEAK_WITH_NEIGHBOR_SUM: Problem = {
    id: 11,
    title: '11. Replace Peak with Neighbor Sum',
    difficulty: 'Medium',
    level: 'Arrays',
    description: 'A peak element is an element that is strictly greater than its immediate left and right neighbors. Find all peak elements in the array and replace each one with the sum of the peak element itself and its two neighbors. Elements at the boundaries (index 0 and n-1) cannot be peaks.',
    examples: [{ input: 'nums = [1, 2, 4, 3, 5, 2]', output: '[1, 2, 9, 3, 10, 2]', explanation: '4 is a peak, replaced by 2+4+3=9. 5 is a peak, replaced by 3+5+2=10.'}],
    constraints: ['`3 <= nums.length <= 1000`']
};

const SUM_OF_BOUNDARY_ELEMENTS: Problem = {
    id: 12,
    title: '12. Sum of Boundary Elements',
    difficulty: 'Easy',
    level: 'Arrays',
    description: 'Calculate the sum of boundary elements in an array. If the array has 4 or more elements, sum the first two and the last two elements. If the array has fewer than 4 elements, sum only the first and last elements. If it has only one element, return that element.',
    examples: [
        { input: 'nums = [1, 2, 4, 5, 5]', output: '13', explanation: '1+2+5+5 = 13' },
        { input: 'nums = [1, 2, 3]', output: '4', explanation: '1+3 = 4' },
        { input: 'nums = [10, 20]', output: '30', explanation: '10+20 = 30' }
    ],
    constraints: ['`1 <= nums.length <= 1000`']
};

const COUNT_REPEATED_ELEMENTS: Problem = {
    id: 13,
    title: '13. Count All Occurrences of Repeated Elements',
    difficulty: 'Medium',
    level: 'Loops',
    description: `
      Your task is to count the total number of occurrences for all elements that appear <strong>more than once</strong> in an array.
      <br/><br/>
      For example, if the number 1 appears 3 times, it contributes 3 to the total count. If the number 2 appears 2 times, it contributes 2. Numbers that appear only once contribute 0.
    `,
    examples: [
      { input: 'nums = [1, 2, 1, 3, 2, 1]', output: '5', explanation: '1 appears 3 times and 2 appears 2 times. Total count is 3 + 2 = 5.' },
      { input: 'nums = [1, 2, 3, 4, 5]', output: '0', explanation: 'No element repeats, so the count is 0.' },
      { input: 'nums = [5, 5, 5, 5, 5]', output: '5', explanation: '5 appears 5 times, so the total count is 5.' }
    ],
    constraints: ['`1 <= nums.length <= 1000`']
};

const ANGLE_TO_COSINE: Problem = {
    id: 14,
    title: '14. Angle to Cosine Value',
    difficulty: 'Easy',
    level: 'Functions',
    description: 'Given an angle in degrees, first convert it to radians using the formula `radians = degrees * PI / 180`. Then, calculate the cosine of the resulting radian value. Assume `M_PI` is `3.1415926535`. Return the value as a float with 2 decimal places.',
    examples: [{ input: 'angle = 145', output: '-0.82' }],
    constraints: ['`0 <= angle <= 360`']
};

const SUM_OF_TWO_LARGEST: Problem = {
    id: 15,
    title: '15. Sum of Two Largest Numbers',
    difficulty: 'Easy',
    level: 'Arrays',
    description: 'Given an array of integers, find the two largest distinct numbers and return their sum.',
    examples: [{ input: 'nums = [9, 3, 6, 2, 8, 9]', output: '17', explanation: 'The two largest distinct numbers are 9 and 8.' }],
    constraints: ['`2 <= nums.length <= 1000`']
};

const COUNT_POSITIVE_ELEMENTS: Problem = {
    id: 16,
    title: '16. Count Positive Elements',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      Your task is to go through an array of integers and count how many of the elements are <strong>strictly greater than 0</strong>.
      <br/><br/>
      The function should loop through the array and return the final count. Negative numbers and zero should be ignored.
    `,
    examples: [
      { input: 'nums = [-1, 0, 1, 2, -3, 4]', output: '3', explanation: 'The positive numbers are 1, 2, and 4.' },
      { input: 'nums = [5, 10, 15]', output: '3', explanation: 'All numbers are positive.' },
      { input: 'nums = [-1, -2, -3, 0]', output: '0', explanation: 'There are no positive numbers in the array.' }
    ],
    constraints: ['`1 <= nums.length <= 1000`']
};

const ADD_TO_ARRAY_FORM: Problem = {
    id: 17,
    title: '17. Add to Array-Form of Integer',
    difficulty: 'Medium',
    level: 'Arrays',
    description: 'The array-form of an integer is an array representing its digits in left-to-right order. For example, for `1321`, the array form is `[1,3,2,1]`. Given the array-form `num` of a non-negative integer and an integer `k`, return the array-form of the integer `num + k`.',
    examples: [
        { input: 'num = [1,2,0,0], k = 34', output: '[1,2,3,4]' },
        { input: 'num = [9,9,9], k = 1', output: '[1,0,0,0]' }
    ],
    constraints: ['`1 <= num.length <= 10000`', '`0 <= num[i] <= 9`', '`0 <= k <= 10000`']
};

const FIND_PRIMES: Problem = {
    id: 18,
    title: '18. Find Prime Numbers in Array',
    difficulty: 'Medium',
    level: 'Loops',
    description: `
      A <strong>prime number</strong> is a natural number greater than 1 that has no positive divisors other than 1 and itself (e.g., 2, 3, 5, 7, 11).
      <br/><br/>
      Your task is to write a program that takes an array of integers and returns a <strong>new array</strong> containing only the prime numbers from the original array, maintaining their original order.
    `,
    examples: [
      { input: 'nums = [2, 3, 4, 5, 6, 7, 11, 13, 15]', output: '[2, 3, 5, 7, 11, 13]' },
      { input: 'nums = [10, 12, 14]', output: '[]', explanation: 'There are no prime numbers in this array.' },
      { input: 'nums = [1, 2, 19, 20]', output: '[2, 19]', explanation: 'The number 1 is not considered prime.' }
    ],
    constraints: ['`1 <= nums[i] <= 1000`']
};

const FIRST_REPEATED_ELEMENT: Problem = {
    id: 19,
    title: '19. First Repeated Element',
    difficulty: 'Easy',
    level: 'Arrays',
    description: 'Given an array of integers, find the first element that repeats. The "first" is determined by the element whose first appearance is earliest in the array.',
    examples: [
        { input: 'nums = [10, 5, 3, 4, 3, 5, 6]', output: '5' },
        { input: 'nums = [6, 10, 5, 4, 9, 10, 4, 6, 8]', output: '6' }
    ],
    constraints: ['`1 <= nums.length <= 1000`']
};

const FIND_MIDDLE_ELEMENT: Problem = {
    id: 20,
    title: '20. Find Middle Element',
    difficulty: 'Easy',
    level: 'Arrays',
    description: 'Given an array of integers, find its middle element. If the array has an even number of elements, return the element at index `(length/2) - 1` (the first of the two middle elements).',
    examples: [
        { input: 'nums = [1, 2, 3, 4, 5]', output: '3' },
        { input: 'nums = [1, 2, 3, 4, 5, 6]', output: '3' }
    ],
    constraints: ['`1 <= nums.length <= 1001`']
};

const FILTER_NON_PRIMES: Problem = {
    id: 21,
    title: '21. Filter Non-Prime Numbers',
    difficulty: 'Medium',
    level: 'Loops',
    description: `
      A <strong>non-prime</strong> (or composite) number is a positive integer that has at least one divisor other than 1 and itself. The number 1 is also considered non-prime.
      <br/><br/>
      Your task is to take an array of integers and return a <strong>new array</strong> containing only the non-prime numbers, in their original order.
    `,
    examples: [
      { input: 'nums = [1, 2, 3, 4, 5, 6, 7, 8]', output: '[1, 4, 6, 8]' },
      { input: 'nums = [2, 3, 5, 7]', output: '[]', explanation: 'All numbers in this array are prime.' },
      { input: 'nums = [9, 10, 15, 25]', output: '[9, 10, 15, 25]', explanation: 'All numbers in this array are non-prime.' }
    ],
    constraints: ['`1 <= nums[i] <= 1000`']
};

const NON_PRIME_FREQUENCY: Problem = {
    id: 22,
    title: '22. Non-Prime Frequency',
    difficulty: 'Medium',
    level: 'Loops',
    description: `
      A <strong>non-prime</strong> (or composite) number is a positive integer that has at least one divisor other than 1 and itself. The number 1 is also considered non-prime.
      <br/><br/>
      Your task is to go through an array of integers and count how many non-prime numbers are present.
    `,
    examples: [
      { input: 'nums = [1, 2, 3, 4, 5, 6, 7, 8]', output: '4', explanation: 'The non-primes are 1, 4, 6, and 8.' },
      { input: 'nums = [11, 13, 17, 19]', output: '0', explanation: 'There are no non-prime numbers in this array.' },
      { input: 'nums = [1, 4, 9, 16, 25]', output: '5', explanation: 'All numbers are non-prime.' }
    ],
    constraints: ['`1 <= nums[i] <= 1000`']
};

const MAJORITY_ELEMENT: Problem = {
    id: 23,
    title: '23. Majority Element',
    difficulty: 'Easy',
    level: 'Arrays',
    description: 'Given an array of size `n`, find the majority element. The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.',
    examples: [{ input: 'nums = [2, 2, 1, 1, 1, 2, 2]', output: '2' }],
    constraints: ['`1 <= n <= 5 * 10^4`']
};

const FILTER_ODD_NUMBERS: Problem = {
    id: 24,
    title: '24. Filter Odd Numbers',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      An <strong>odd number</strong> is an integer that is not divisible by 2.
      <br/><br/>
      Your task is to take an array of integers and return a <strong>new array</strong> that contains only the odd numbers from the original array, while keeping them in their original order.
    `,
    examples: [
      { input: 'nums = [1, 2, 3, 4, 5, 6, 7, 8]', output: '[1, 3, 5, 7]' },
      { input: 'nums = [2, 4, 6, 8]', output: '[]', explanation: 'This array contains no odd numbers.' },
      { input: 'nums = [9, 11, 13, 15]', output: '[9, 11, 13, 15]', explanation: 'This array contains only odd numbers.' }
    ],
    constraints: ['`1 <= nums.length <= 1000`']
};

const REMOVE_EVEN_AT_EVEN_INDEX: Problem = {
    id: 25,
    title: '25. Remove Even Number at Even Index',
    difficulty: 'Medium',
    level: 'Arrays',
    description: 'Given an array of integers, remove all elements that are themselves even numbers AND are located at an even index (0, 2, 4, ...). Return the modified array.',
    examples: [{ input: 'nums = [4, 9, 8, 6, 2, 1]', output: '[9, 6, 1]', explanation: '4 (index 0), 8 (index 2), and 2 (index 4) are removed.' }],
    constraints: ['`1 <= nums.length <= 1000`']
};

const CHUNK_ARRAY: Problem = {
    id: 26,
    title: '26. Chunk Array',
    difficulty: 'Easy',
    level: 'Arrays',
    description: 'Given an array and a chunk size, divide the array into many subarrays where each subarray is of the given length. The final subarray may be smaller.',
    examples: [{ input: 'nums = [1, 2, 3, 4, 5, 6, 7], size = 3', output: '[[1,2,3],[4,5,6],[7]]' }],
    constraints: ['`1 <= nums.length <= 1000`', '`size >= 1`']
};

const ELEMENT_FREQUENCIES: Problem = {
    id: 27,
    title: '27. Element Frequencies',
    difficulty: 'Medium',
    level: 'Arrays',
    description: 'Given an array of integers, count the frequency of each unique element. Return the result as a list of pairs, where each pair contains the number and its frequency. The order of pairs does not matter.',
    examples: [{ input: 'nums = [1, 5, 2, 1, 4, 2]', output: '[[1, 2], [5, 1], [2, 2], [4, 1]]' }],
    constraints: ['`1 <= nums.length <= 1000`']
};

const REMOVE_FIRST_OCCURRENCE: Problem = {
    id: 28,
    title: '28. Remove First Occurrence',
    difficulty: 'Easy',
    level: 'Arrays',
    description: 'Given an array and a target number, remove the first occurrence of that number from the array and return the new array.',
    examples: [{ input: 'nums = [1, 2, 3, 2, 4], target = 2', output: '[1, 3, 2, 4]' }],
    constraints: ['`1 <= nums.length <= 1000`']
};

const FIND_MEDIAN: Problem = {
    id: 29,
    title: '29. Find Median of Array',
    difficulty: 'Medium',
    level: 'Arrays',
    description: 'Given an array of integers, find the median. The median is the middle value in a sorted list of numbers. If the list has an even number of entries, the median is the average of the two middle values, returned as a float with one decimal place.',
    examples: [
        { input: 'nums = [1, 3, 3, 6, 7, 8, 9]', output: '6.0' },
        { input: 'nums = [1, 2, 3, 4, 5, 6, 8, 9]', output: '4.5' }
    ],
    constraints: ['`1 <= nums.length <= 1001`']
};

const COUNT_DIVISIBLE: Problem = {
    id: 30,
    title: '30. Count Divisible Elements',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      Your task is to count how many elements in a given array are <strong>perfectly divisible</strong> by a given number <code>k</code>.
      <br/><br/>
      "Perfectly divisible" means that the division results in a remainder of 0. You need to loop through the array and check this condition for each element.
    `,
    examples: [
      { input: 'nums = [2, 4, 5, 8, 9, 12], k = 4', output: '3', explanation: '4, 8, and 12 are divisible by 4.' },
      { input: 'nums = [1, 2, 3, 4, 5], k = 6', output: '0', explanation: 'No number in the array is divisible by 6.' },
      { input: 'nums = [7, 14, 21, 28], k = 7', output: '4', explanation: 'All numbers are divisible by 7.' }
    ],
    constraints: ['`1 <= nums.length <= 1000`', '`k != 0`']
};

const CYCLIC_PERMUTATION: Problem = {
    id: 31,
    title: '31. Cyclic Permutation (Right Shift)',
    difficulty: 'Easy',
    level: 'Arrays',
    description: 'Perform a single cyclic permutation on an array, which moves the last element to the first position and shifts all other elements one position to the right.',
    examples: [{ input: 'nums = [1, 2, 3, 4, 5]', output: '[5, 1, 2, 3, 4]' }],
    constraints: ['`1 <= nums.length <= 1000`']
};

const ASSIGN_RANKS: Problem = {
    id: 32,
    title: '32. Assign Ranks to Array Elements',
    difficulty: 'Medium',
    level: 'Arrays',
    description: 'Given an array of unique integers, replace each element with its rank. The rank is 1 for the smallest element, 2 for the second smallest, and so on. Return the array of ranks.',
    examples: [{ input: 'nums = [52, 41, 63, 95, 35]', output: '[3, 2, 4, 5, 1]' }],
    constraints: ['`1 <= nums.length <= 1000`', 'All elements are unique.']
};

const FIND_PEAK_ELEMENT: Problem = {
    id: 33,
    title: '33. Find a Peak Element',
    difficulty: 'Medium',
    level: 'Arrays',
    description: 'A peak element is an element that is strictly greater than its neighbors. Given an integer array, find a peak element and return it. If there are multiple peaks, returning any one of them is acceptable.',
    examples: [
        { input: 'nums = [1, 2, 3, 1]', output: '3' },
        { input: 'nums = [1, 2, 1, 3, 5, 6, 4]', output: '2 or 6' }
    ],
    constraints: ['`1 <= nums.length <= 1000`']
};

const SUMMARY_RANGES: Problem = {
    id: 34,
    title: '34. Summary Ranges',
    difficulty: 'Easy',
    level: 'Strings',
    description: 'You are given a sorted unique integer array `nums`. A range `[a,b]` is the set of all integers from `a` to `b`, inclusive. Return the smallest sorted list of ranges that cover all the numbers in the array exactly. Each range `[a,b]` in the list should be output as "a->b" if a != b, or "a" if a == b.',
    examples: [{ input: 'nums = [0, 1, 2, 4, 5, 7]', output: '["0->2", "4->5", "7"]' }],
    constraints: ['`0 <= nums.length <= 20`', 'Array is sorted and contains unique elements.']
};

const TWO_SUM_CLOSEST_TO_ZERO: Problem = {
    id: 35,
    title: '35. Two Sum Closest to Zero',
    difficulty: 'Medium',
    level: 'Arrays',
    description: 'Given an array of integers, find two elements whose sum is closest to zero. Return these two elements.',
    examples: [{ input: 'nums = [1, 60, -10, 70, -80, 85]', output: '[-80, 85]', explanation: 'The sum is 5, which is the closest to zero.' }],
    constraints: ['`2 <= nums.length <= 1000`']
};

const ALTERNATE_ELEMENTS_REVERSE: Problem = {
    id: 36,
    title: '36. Alternate Elements in Reverse',
    difficulty: 'Easy',
    level: 'Arrays',
    description: 'Given an array of integers, return a new array containing the elements at alternate indices (0, 2, 4, ...) but starting from the end of the array.',
    examples: [{ input: 'nums = [1, 2, 3, 4, 5, 6]', output: '[6, 4, 2]' }],
    constraints: ['`1 <= nums.length <= 1000`']
};

// New Easy Problems Start from ID 37
const THIRD_LARGEST_ELEMENT: Problem = {
    id: 37,
    title: '37. Third Largest Element',
    difficulty: 'Easy',
    level: 'Arrays',
    description: 'Given a non-empty array of distinct integers, find the third largest element in it. If the third largest does not exist, return the largest.',
    examples: [
        { input: 'nums = [3, 2, 1, 5, 6, 4]', output: '4' },
        { input: 'nums = [1, 2]', output: '2' },
        { input: 'nums = [2, 2, 3, 1]', output: '1', explanation: 'Assume distinct elements are considered. After removing duplicates: [1, 2, 3]. Third largest is 1.'}
    ],
    constraints: ['`1 <= nums.length <= 10^4`', '`-2^31 <= nums[i] <= 2^31 - 1`']
};

const REVERSE_ARRAY_IN_GROUPS: Problem = {
    id: 38,
    title: '38. Reverse Array in Groups',
    difficulty: 'Easy',
    level: 'Functions',
    description: 'Given an array `arr` and a number `k`, reverse every sub-array of size `k`. If the last sub-array has fewer than `k` elements, reverse it as well.',
    examples: [
        { input: 'arr = [1, 2, 3, 4, 5], k = 3', output: '[3, 2, 1, 5, 4]' }
    ],
    constraints: ['`1 <= arr.length <= 1000`', '`1 <= k <= arr.length`']
};

const ROTATE_ARRAY_RIGHT: Problem = {
    id: 39,
    title: '39. Rotate Array (Right)',
    difficulty: 'Easy',
    level: 'Arrays',
    description: 'Given an array, rotate the array to the right by `k` steps, where `k` is non-negative.',
    examples: [
        { input: 'nums = [1, 2, 3, 4, 5, 6, 7], k = 3', output: '[5, 6, 7, 1, 2, 3, 4]' },
        { input: 'nums = [-1, -100, 3, 99], k = 2', output: '[3, 99, -1, -100]' }
    ],
    constraints: ['`1 <= nums.length <= 10^5`', '`0 <= k <= 10^5`']
};

const THREE_GREAT_CANDIDATES: Problem = {
    id: 40,
    title: '40. Three Great Candidates',
    difficulty: 'Easy',
    level: 'Arrays',
    description: 'Given an integer array `nums`, find the maximum product of three numbers in the array. The array can contain negative numbers.',
    examples: [
        { input: 'nums = [1, 2, 3, 4]', output: '24' },
        { input: 'nums = [-1, -2, -3, -4]', output: '-6', explanation: 'The product of three largest numbers is (-1)*(-2)*(-3) = -6' },
        { input: 'nums = [-10, -3, 5, 6, 20]', output: '600', explanation: 'The product can be from two smallest negative numbers and the largest positive number (-10)*(-3)*20 = 600' }
    ],
    constraints: ['`3 <= nums.length <= 10^4`', '`-1000 <= nums[i] <= 1000`']
};

const MAX_CONSECUTIVE_ONES: Problem = {
    id: 41,
    title: '41. Max Consecutive Ones',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      Given a binary array (an array containing only 0s and 1s), your task is to find the maximum number of consecutive <code>1</code>s in the array.
      <br/><br/>
      You'll need to loop through the array, keeping track of the current streak of 1s and updating a maximum count whenever you see a longer streak.
    `,
    examples: [
        { input: 'nums = [1, 1, 0, 1, 1, 1]', output: '3', explanation: 'The longest sequence of consecutive 1s is at the end, with a length of 3.' },
        { input: 'nums = [1, 0, 1, 1, 0, 1]', output: '2', explanation: 'The longest sequence is of length 2.' },
        { input: 'nums = [0, 0, 0]', output: '0', explanation: 'There are no 1s in the array.' }
    ],
    constraints: ['`1 <= nums.length <= 10^5`', '`nums[i]` is either `0` or `1`.']
};

const MOVE_ALL_ZEROES_TO_END: Problem = {
    id: 42,
    title: '42. Move All Zeroes To End',
    difficulty: 'Easy',
    level: 'Arrays',
    description: 'Given an integer array `nums`, move all `0`s to the end of it while maintaining the relative order of the non-zero elements. Note that you must do this in-place without making a copy of the array.',
    examples: [
        { input: 'nums = [0, 1, 0, 3, 12]', output: '[1, 3, 12, 0, 0]' }
    ],
    constraints: ['`1 <= nums.length <= 10^4`']
};

const WAVE_ARRAY: Problem = {
    id: 43,
    title: '43. Wave Array',
    difficulty: 'Easy',
    level: 'Arrays',
    description: 'Given an array of integers, sort the array into a wave like array and return it. In other words, arrange the elements into a sequence such that `arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4]...`',
    examples: [
        { input: 'nums = [1, 2, 3, 4, 5]', output: '[2, 1, 4, 3, 5]' }
    ],
    constraints: ['`1 <= nums.length <= 10^5`', 'All elements are distinct.']
};

const PLUS_ONE: Problem = {
    id: 44,
    title: '44. Plus One',
    difficulty: 'Easy',
    level: 'Arrays',
    description: 'You are given a large integer represented as an integer array `digits`, where each `digits[i]` is the `i`th digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading `0`s. Increment the large integer by one and return the resulting array of digits.',
    examples: [
        { input: 'digits = [1, 2, 3]', output: '[1, 2, 4]' },
        { input: 'digits = [9, 9, 9]', output: '[1, 0, 0, 0]' }
    ],
    constraints: ['`1 <= digits.length <= 100`', '`0 <= digits[i] <= 9`']
};

const STOCK_BUY_SELL_ONE: Problem = {
    id: 45,
    title: '45. Stock Buy and Sell – One Transaction',
    difficulty: 'Easy',
    level: 'Arrays',
    description: 'You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.',
    examples: [
        { input: 'prices = [7, 1, 5, 3, 6, 4]', output: '5', explanation: 'Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.' },
        { input: 'prices = [7, 6, 4, 3, 1]', output: '0', explanation: 'In this case, no transaction is done, i.e., max profit = 0.' }
    ],
    constraints: ['`1 <= prices.length <= 10^5`', '`0 <= prices[i] <= 10^4`']
};

const STOCK_BUY_SELL_MULTI: Problem = {
    id: 46,
    title: '46. Stock Buy and Sell – Multiple Transactions',
    difficulty: 'Easy',
    level: 'Arrays',
    description: 'You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day. Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times). Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).',
    examples: [
        { input: 'prices = [7, 1, 5, 3, 6, 4]', output: '7', explanation: 'Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 4. Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 3. Total profit = 7.'}
    ],
    constraints: ['`1 <= prices.length <= 10^5`', '`0 <= prices[i] <= 10^4`']
};

const ALTERNATE_POSITIVE_NEGATIVE: Problem = {
    id: 47,
    title: '47. Alternate Positive Negative',
    difficulty: 'Easy',
    level: 'Arrays',
    description: 'Given an unsorted array `arr` of positive and negative numbers. Your task is to rearrange the array elements at alternate positions, starting with a positive number. If there are more positive or negative numbers, they appear at the end of the array.',
    examples: [
        { input: 'arr = [9, 4, -2, -1, 5, 0, -5, -3, 2]', output: '[9, -2, 4, -1, 5, -5, 0, -3, 2]' }
    ],
    constraints: ['`1 <= arr.length <= 10^5`']
};

const ARRAY_LEADERS: Problem = {
    id: 48,
    title: '48. Array Leaders',
    difficulty: 'Easy',
    level: 'Arrays',
    description: 'Given an integer array `arr` of size `n`. An element of array is leader if it is greater than or equal to all the elements to its right side. The rightmost element is always a leader. Return an array of leaders.',
    examples: [
        { input: 'arr = [16, 17, 4, 3, 5, 2]', output: '[17, 5, 2]' }
    ],
    constraints: ['`1 <= arr.length <= 10^5`']
};

const MISSING_AND_REPEATING: Problem = {
    id: 49,
    title: '49. Missing and Repeating in Array',
    difficulty: 'Easy',
    level: 'Arrays',
    description: 'Given an unsorted array of size `n`. Array elements are in the range from 1 to `n`. One number from set {1, 2, …n} is missing and one number occurs twice in the array. Find these two numbers.',
    examples: [
        { input: 'nums = [2, 2]', output: 'Repeating = 2, Missing = 1' },
        { input: 'nums = [4, 3, 6, 2, 1, 1]', output: 'Repeating = 1, Missing = 5' }
    ],
    constraints: ['`2 <= nums.length <= 10^5`']
};

const MISSING_RANGES: Problem = {
    id: 50,
    title: '50. Missing Ranges of Numbers',
    difficulty: 'Easy',
    level: 'Strings',
    description: 'You are given an inclusive range `[lower, upper]` and a sorted unique integer array `nums`, where all elements are in the inclusive range. A number `x` is considered missing if `x` is in the range `[lower, upper]` and `x` is not in `nums`. Return the smallest sorted list of ranges that cover every missing number exactly. Output format for a range `[a,b]` should be "a->b" if a != b, and "a" if a == b.',
    examples: [
        { input: 'nums = [0, 1, 3, 50, 75], lower = 0, upper = 99', output: '["2", "4->49", "51->74", "76->99"]' }
    ],
    constraints: ['`0 <= nums.length <= 100`', '`lower <= upper`']
};

const SUM_OF_ALL_SUBARRAYS: Problem = {
    id: 51,
    title: '51. Sum of all Subarrays',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      A <strong>subarray</strong> is a contiguous part of an array. For example, for the array <code>[1, 2, 3]</code>, the subarrays are <code>[1]</code>, <code>[2]</code>, <code>[3]</code>, <code>[1, 2]</code>, <code>[2, 3]</code>, and <code>[1, 2, 3]</code>.
      <br/><br/>
      Your task is to find the sum of all possible subarrays for a given integer array.
    `,
    examples: [
        { input: 'arr = [1, 2, 3]', output: '20', explanation: 'Subarrays sums: 1 + 2 + 3 + (1+2) + (2+3) + (1+2+3) = 1+2+3+3+5+6 = 20.' },
        { input: 'arr = [1, 2]', output: '6', explanation: 'Subarrays sums: 1 + 2 + (1+2) = 1+2+3 = 6.' },
        { input: 'arr = [5]', output: '5', explanation: 'The only subarray is [5] itself.' }
    ],
    constraints: ['`1 <= arr.length <= 10^5`']
};

// New Medium Problems Start from ID 52
const NEXT_PERMUTATION: Problem = {
    id: 52,
    title: '52. Next Permutation',
    difficulty: 'Medium',
    level: 'Functions',
    description: 'Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers. If such arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order). The replacement must be in-place and use only constant extra memory.',
    examples: [
        { input: 'nums = [1, 2, 3]', output: '[1, 3, 2]' },
        { input: 'nums = [3, 2, 1]', output: '[1, 2, 3]' },
        { input: 'nums = [1, 1, 5]', output: '[1, 5, 1]' }
    ],
    constraints: ['`1 <= nums.length <= 100`']
};

const MAJORITY_ELEMENT_II: Problem = {
    id: 53,
    title: '53. Majority Element II',
    difficulty: 'Medium',
    level: 'Arrays',
    description: 'Given an integer array of size `n`, find all elements that appear more than `⌊ n/3 ⌋` times.',
    examples: [
        { input: 'nums = [3, 2, 3]', output: '[3]' },
        { input: 'nums = [1, 1, 1, 3, 3, 2, 2, 2]', output: '[1, 2]' }
    ],
    constraints: ['`1 <= nums.length <= 5 * 10^4`']
};

const MINIMIZE_THE_HEIGHTS_II: Problem = {
    id: 54,
    title: '54. Minimize the Heights II',
    difficulty: 'Medium',
    level: 'Arrays',
    description: 'Given an array `arr[]` of `n` integers and a number `k`. For each element of the array, you can either add `k` or subtract `k` (once). The task is to find the minimum possible difference between the maximum and minimum elements of the new array.',
    examples: [
        { input: 'arr = [1, 5, 8, 10], k = 2', output: '5', explanation: 'New array can be [3, 3, 6, 8]. Max-Min = 8-3 = 5.' }
    ],
    constraints: ['`1 <= n <= 10^5`', '`1 <= k, arr[i] <= 10^9`']
};

const MAX_SUBARRAY_SUM: Problem = {
    id: 55,
    title: '55. Maximum Subarray Sum',
    difficulty: 'Medium',
    level: 'Arrays',
    description: 'Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum. This is also known as Kadane\'s Algorithm.',
    examples: [
        { input: 'nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]', output: '6', explanation: '[4, -1, 2, 1] has the largest sum = 6.' }
    ],
    constraints: ['`1 <= nums.length <= 10^5`']
};

const MAX_PRODUCT_SUBARRAY: Problem = {
    id: 56,
    title: '56. Maximum Product Subarray',
    difficulty: 'Medium',
    level: 'Arrays',
    description: 'Given an integer array `nums`, find a contiguous non-empty subarray within the array that has the largest product, and return the product.',
    examples: [
        { input: 'nums = [2, 3, -2, 4]', output: '6', explanation: '[2, 3] has the largest product 6.' },
        { input: 'nums = [-2, 0, -1]', output: '0', explanation: 'The result cannot be 2, because [-2,-1] is not a subarray.' }
    ],
    constraints: ['`1 <= nums.length <= 2 * 10^4`']
};

const PRODUCT_OF_ARRAY_EXCEPT_SELF: Problem = {
    id: 57,
    title: '57. Product of Array Except Self',
    difficulty: 'Medium',
    level: 'Arrays',
    description: 'Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`. You must write an algorithm that runs in O(n) time and without using the division operation.',
    examples: [
        { input: 'nums = [1, 2, 3, 4]', output: '[24, 12, 8, 6]' }
    ],
    constraints: ['`2 <= nums.length <= 10^5`']
};

const SUBARRAYS_WITH_PRODUCT_LESS_THAN_K: Problem = {
    id: 58,
    title: '58. Subarrays with Product Less Than K',
    difficulty: 'Medium',
    level: 'Loops',
    description: `
      You are given an array of positive integers <code>nums</code> and an integer <code>k</code>. Your task is to count and return the number of contiguous subarrays where the product of all the elements in that subarray is <strong>strictly less than k</strong>.
    `,
    examples: [
        { input: 'nums = [10, 5, 2, 6], k = 100', output: '8', explanation: 'The 8 subarrays are [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]. Note that [10, 5, 2] is not included because its product is 100.' },
        { input: 'nums = [1, 2, 3], k = 0', output: '0', explanation: 'Since k is 0, no product can be less than it.' },
        { input: 'nums = [1, 1, 1], k = 2', output: '6', explanation: 'All possible subarrays ([1], [1], [1], [1,1], [1,1], [1,1,1]) have a product of 1, which is less than 2.' }
    ],
    constraints: ['`1 <= nums.length <= 3 * 10^4`', '`1 <= k <= 10^9`']
};

const SPLIT_INTO_THREE_EQUAL_SUM: Problem = {
    id: 59,
    title: '59. Split Into Three Equal Sum Segments',
    difficulty: 'Medium',
    level: 'Arrays',
    description: 'Given an array of integers `arr`, return `true` if it is possible to partition the array into three non-empty parts with equal sums. Formally, return `true` if you can find indices `i + 1 < j` such that `arr[0] + ... + arr[i] == arr[i + 1] + ... + arr[j - 1] == arr[j] + ... + arr[arr.length - 1]`.',
    examples: [
        { input: 'arr = [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]', output: 'true' },
        { input: 'arr = [3, 3, 6, 5, -2, 2, 5, 1, -9, 4]', output: 'true' }
    ],
    constraints: ['`3 <= arr.length <= 5 * 10^4`']
};

const MAX_CONSECUTIVE_ONES_FLIP: Problem = {
    id: 60,
    title: '60. Maximum Consecutive 1s After Flipping 0s',
    difficulty: 'Medium',
    level: 'Loops',
    description: `
      Given a binary array <code>nums</code>, you are allowed to flip <strong>at most one</strong> <code>0</code> to a <code>1</code>.
      <br/><br/>
      Your task is to find the length of the longest possible continuous subarray of <code>1</code>s you can achieve after performing this single flip.
    `,
    examples: [
        { input: 'nums = [1, 0, 1, 1, 0]', output: '4', explanation: 'Flip the first zero to get [1, 1, 1, 1, 0]. The longest subarray of 1s is now of length 4.' },
        { input: 'nums = [1, 1, 1, 1, 1]', output: '5', explanation: 'No zeroes to flip, the longest subarray is the array itself.' },
        { input: 'nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0]', output: '6', explanation: 'Flip the zero at index 9 to get a continuous subarray of six 1s.' }
    ],
    constraints: ['`1 <= nums.length <= 10^5`']
};

const LAST_MOMENT_ANTS_FALL: Problem = {
    id: 61,
    title: '61. Last Moment Before Ants Fall Out of Plank',
    difficulty: 'Medium',
    level: 'Arrays',
    description: 'We have a wooden plank of length `n`. Some ants are walking on it. When two ants meet, they change directions and continue. When an ant reaches an end, it falls off. Given `n`, an array `left` (positions of ants moving left), and an array `right` (positions of ants moving right), return the moment when the last ant(s) fall out.',
    examples: [
        { input: 'n = 4, left = [4, 3], right = [0, 1]', output: '4', explanation: 'Ants are at 0, 1, 3, 4. The last one to fall is at position 0 or 4, taking 4 seconds.' }
    ],
    constraints: ['`1 <= n <= 10^4`']
};

const INTERSECTION_INTERVAL_LISTS: Problem = {
    id: 62,
    title: '62. Intersection of Interval Lists',
    difficulty: 'Medium',
    level: 'Arrays',
    description: 'You are given two lists of closed intervals, `firstList` and `secondList`, where `firstList[i] = [start_i, end_i]` and `secondList[j] = [start_j, end_j]`. Each list of intervals is pairwise disjoint and in sorted order. Return the intersection of these two interval lists.',
    examples: [
        { input: 'firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]', output: '[[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]' }
    ],
    constraints: ['Intervals are sorted and disjoint.']
};

const REARRANGE_ARRAY_BY_SIGN: Problem = {
    id: 63,
    title: '63. Rearrange Array Elements by Sign',
    difficulty: 'Medium',
    level: 'Arrays',
    description: 'You are given a 0-indexed integer array `nums` of even length with an equal number of positive and negative integers. Rearrange `nums` such that every consecutive pair has opposite signs, and the relative order of numbers with the same sign is preserved.',
    examples: [
        { input: 'nums = [3, 1, -2, -5, 2, -4]', output: '[3, -2, 1, -5, 2, -4]' }
    ],
    constraints: ['`2 <= nums.length <= 2 * 10^5`', '`nums` has an equal number of positive and negative integers.']
};

const MEETING_SCHEDULER: Problem = {
    id: 64,
    title: '64. Meeting Scheduler for Two Persons',
    difficulty: 'Medium',
    level: 'Arrays',
    description: 'Given the availability time slots for two people as `slots1`, `slots2`, and a meeting `duration`, find the earliest time slot that works for both of them and is of the given duration. Return an array of length 2 representing the start and end of the slot. If there is no such slot, return an empty array.',
    examples: [
        { input: 'slots1 = [[10,50],[60,120],[140,210]], slots2 = [[0,15],[60,70]], duration = 8', output: '[60, 68]' }
    ],
    constraints: ['`1 <= slots1.length, slots2.length <= 10^4`', '`1 <= duration <= 10^6`']
};

const LONGEST_MOUNTAIN_SUBARRAY: Problem = {
    id: 65,
    title: '65. Longest Mountain Subarray',
    difficulty: 'Medium',
    level: 'Arrays',
    description: 'You may recall that an array `arr` is a mountain array if and only if `arr.length >= 3` and there exists some `i` with `0 < i < arr.length - 1` such that: `arr[0] < arr[1] < ... < arr[i-1] < arr[i]` and `arr[i] > arr[i+1] > ... > arr[arr.length - 1]`. Given an integer array `arr`, return the length of the longest subarray that is a mountain array. If there is no mountain subarray, return 0.',
    examples: [
        { input: 'arr = [2, 1, 4, 7, 3, 2, 5]', output: '5', explanation: 'The longest mountain is [1, 4, 7, 3, 2] which has length 5.' }
    ],
    constraints: ['`1 <= arr.length <= 10^4`']
};

const TRANSFORM_AND_SORT_ARRAY: Problem = {
    id: 66,
    title: '66. Transform and Sort Array',
    difficulty: 'Medium',
    level: 'Functions',
    description: 'Given a sorted integer array `nums` and integers `a`, `b`, and `c`, apply a quadratic function of the form `f(x) = ax^2 + bx + c` to each element `x` in the array. Return the array in sorted order.',
    examples: [
        { input: 'nums = [-4, -2, 2, 4], a = 1, b = 3, c = 5', output: '[3, 9, 15, 33]' },
        { input: 'nums = [-4, -2, 2, 4], a = -1, b = 3, c = 5', output: '[-23, -5, 1, 7]' }
    ],
    constraints: ['`1 <= nums.length <= 200`', '`nums` is sorted.']
};

const MIN_SWAPS_GROUP_ONES: Problem = {
    id: 67,
    title: '67. Minimum Swaps To Group All Ones',
    difficulty: 'Medium',
    level: 'Arrays',
    description: 'Given a binary array `data`, return the minimum number of swaps required to group all `1`s present in the array together in any place in the array.',
    examples: [
        { input: 'data = [1, 0, 1, 0, 1]', output: '1', explanation: 'There are three 1s, so we want to form a window of size 3. The subarray [1, 0, 1] has one 0, so we need one swap.' }
    ],
    constraints: ['`1 <= data.length <= 10^5`']
};

const MIN_MOVES_EQUALIZE_ARRAY: Problem = {
    id: 68,
    title: '68. Minimum Moves To Equalize Array',
    difficulty: 'Medium',
    level: 'Arrays',
    description: 'Given an integer array `nums` of size `n`, return the minimum number of moves required to make all array elements equal. In one move, you can increment `n - 1` elements of the array by `1`.',
    examples: [
        { input: 'nums = [1, 2, 3]', output: '3', explanation: '[1,2,3] => [2,3,3] => [3,4,3] => [4,4,4]' }
    ],
    constraints: ['`1 <= nums.length <= 10^5`']
};

const MIN_INDICES_EVEN_ODD_SUM: Problem = {
    id: 69,
    title: '69. Minimum Indices To Equal Even-Odd Sums',
    difficulty: 'Medium',
    level: 'Arrays',
    description: 'You are given a 0-indexed integer array `nums`. You can remove any one element from the array. Return the number of indices `i` such that if `nums[i]` is removed, the sum of the remaining even-indexed elements is equal to the sum of the remaining odd-indexed elements.',
    examples: [
        { input: 'nums = [2, 1, 6, 4]', output: '1', explanation: 'If we remove nums[1] (value 1), the array becomes [2, 6, 4]. The sum of even-indexed elements is 2 + 4 = 6, and the sum of odd-indexed elements is 6. They are equal, so index 1 is a valid removal. This is the only such index.' }
    ],
    constraints: ['`1 <= nums.length <= 1000`']
};

// New Loops Problems (ID 70-124)
const FIBONACCI_SERIES: Problem = {
    id: 70,
    title: '70. Fibonacci Series',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      The <strong>Fibonacci series</strong> is a sequence of numbers where each number is the sum of the two preceding ones, usually starting from 0 and 1.
      <br/><br/>
      The sequence begins: <code>0, 1, 1, 2, 3, 5, 8, 13, 21, ...</code>
      <br/><br/>
      <strong>Goal:</strong> Your task is to write a program that generates and prints the first <code>N</code> numbers of the Fibonacci series, separated by spaces.
    `,
    examples: [
      { input: 'N = 10', output: '0 1 1 2 3 5 8 13 21 34' },
      { input: 'N = 1', output: '0', explanation: 'The first term is 0.' },
      { input: 'N = 5', output: '0 1 1 2 3' }
    ],
    constraints: ['`1 <= N <= 40`']
};
const SMALLEST_PRIME_NUMBER: Problem = {
    id: 71,
    title: '71. Smallest Prime Factor',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      A <strong>prime factor</strong> is a prime number that divides another number exactly, without leaving a remainder.
      <br/><br/>
      For example, the prime factors of 30 are 2, 3, and 5.
      <br/><br/>
      <strong>Goal:</strong> Your task is to find the <strong>smallest prime factor</strong> of a given number <code>N</code>.
    `,
    examples: [
      { input: 'N = 35', output: '5', explanation: 'The prime factors are 5 and 7. The smallest is 5.' },
      { input: 'N = 17', output: '17', explanation: '17 is a prime number, so its only prime factor is itself.' },
      { input: 'N = 100', output: '2', explanation: 'The prime factors are 2, 2, 5, 5. The smallest is 2.' }
    ],
    constraints: ['`2 <= N <= 1000`']
};
const PRIME_OR_COMPOSITE_NUMBER: Problem = {
    id: 72,
    title: '72. Prime or Composite Number',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      This task requires you to classify a given number <code>N</code> as either "Prime" or "Composite".
      <ul>
        <li>A <strong>prime number</strong> is a natural number greater than 1 that has no positive divisors other than 1 and itself (e.g., 2, 3, 5, 7).</li>
        <li>A <strong>composite number</strong> has more than two factors (e.g., 4, 6, 8, 9).</li>
      </ul>
      Note: The number 1 is considered neither prime nor composite.
      <br/><br/>
      <strong>Goal:</strong> Check if <code>N</code> is prime or composite and return the corresponding string.
    `,
    examples: [
        { input: 'N = 7', output: 'Prime' },
        { input: 'N = 10', output: 'Composite', explanation: '10 is divisible by 1, 2, 5, and 10.' },
        { input: 'N = 2', output: 'Prime', explanation: '2 is the smallest prime number.' }
    ],
    constraints: ['`2 <= N <= 1000`']
};
const SERIES_SUM_CALCULATOR: Problem = {
    id: 73,
    title: '73. Series Sum Calculator',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      <strong>Natural numbers</strong> are the set of positive integers (1, 2, 3, ...).
      <br/><br/>
      <strong>Goal:</strong> Your task is to calculate the sum of the first <code>N</code> natural numbers. For example, if <code>N</code> is 5, you should calculate <code>1 + 2 + 3 + 4 + 5</code>.
    `,
    examples: [
      { input: 'N = 5', output: '15', explanation: '1 + 2 + 3 + 4 + 5 = 15' },
      { input: 'N = 1', output: '1' },
      { input: 'N = 100', output: '5050' }
    ],
    constraints: ['`1 <= N <= 1000`']
};
const DIVISOR_SUM_AND_EQUALITY_CHECKER: Problem = {
    id: 74,
    title: '74. Sum of Proper Divisors',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      A <strong>proper divisor</strong> of a number is a positive divisor other than the number itself. For example, the proper divisors of 6 are 1, 2, and 3.
      <br/><br/>
      <strong>Goal:</strong> Your task is to find the sum of all proper divisors of a given number <code>N</code>.
    `,
    examples: [
        { input: 'N = 6', output: '6', explanation: 'The proper divisors are 1, 2, 3. Their sum is 1 + 2 + 3 = 6.' },
        { input: 'N = 10', output: '8', explanation: 'The proper divisors are 1, 2, 5. Their sum is 1 + 2 + 5 = 8.' },
        { input: 'N = 7', output: '1', explanation: '7 is prime, so its only proper divisor is 1.' }
    ],
    constraints: ['`1 <= N <= 1000`']
};
const ABUNDANT_NUMBER: Problem = {
    id: 75,
    title: '75. Abundant Number',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      An <strong>abundant number</strong> is a number for which the sum of its proper divisors is greater than the number itself.
      <br/><br/>
      For example, for 12, the proper divisors are 1, 2, 3, 4, 6, and their sum is 16. Since 16 > 12, 12 is an abundant number.
      <br/><br/>
      <strong>Goal:</strong> Your task is to check if a given number <code>N</code> is abundant. Return 'true' if it is, 'false' otherwise.
    `,
    examples: [
      { input: 'N = 12', output: 'true', explanation: 'Sum of proper divisors (1+2+3+4+6) is 16, which is > 12.' },
      { input: 'N = 10', output: 'false', explanation: 'Sum of proper divisors (1+2+5) is 8, which is not > 10.' },
      { input: 'N = 20', output: 'true', explanation: 'Sum of proper divisors (1+2+4+5+10) is 22, which is > 20.' }
    ],
    constraints: ['`1 <= N <= 10000`']
};
const COUNTED_THE_NUMBER_OF_LEAP_AND_NON_LEAP_YEARS: Problem = {
    id: 76,
    title: '76. Count Leap and Non-Leap Years',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      A <strong>leap year</strong> has 366 days and occurs every 4 years to keep the calendar year synchronized with the astronomical year. The rules are:
      <ul>
        <li>1. A year is a leap year if it is divisible by 4.</li>
        <li>2. However, if the year is divisible by 100, it is NOT a leap year, UNLESS...</li>
        <li>3. The year is also divisible by 400. Then it IS a leap year.</li>
      </ul>
      <strong>Goal:</strong> Given a start and end year, your task is to count the number of leap years and non-leap years in that inclusive range.
    `,
    examples: [
      { input: 'start = 2000, end = 2020', output: 'Leap years: 6, Non-leap years: 15' },
      { input: 'start = 1999, end = 2001', output: 'Leap years: 1, Non-leap years: 2', explanation: '2000 is a leap year.' },
      { input: 'start = 1898, end = 1902', output: 'Leap years: 0, Non-leap years: 5', explanation: '1900 is divisible by 100 but not by 400, so it is not a leap year.' }
    ],
    constraints: ['`1 <= start <= end <= 3000`']
};
const GEOMETRIC_SERIES_SUM_CALCULATOR: Problem = {
    id: 77,
    title: '77. Geometric Series Sum Calculator',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      A geometric series is a sequence of numbers where each term after the first is found by multiplying the previous one by a fixed, non-zero number called the common ratio.
      <br/><br/>
      <strong>Goal:</strong> Your task is to calculate the sum of the first <code>N</code> terms of a series with a starting term of 1 and a common ratio of 2. The series looks like: <code>1 + 2 + 4 + 8 + ...</code>
    `,
    examples: [
      { input: 'N = 5', output: '31', explanation: '1 + 2 + 4 + 8 + 16 = 31' },
      { input: 'N = 1', output: '1' },
      { input: 'N = 3', output: '7', explanation: '1 + 2 + 4 = 7' }
    ],
    constraints: ['`1 <= N <= 30`']
};
const SUM_OF_SQUARES_OF_N_NATURAL_NUMBERS: Problem = {
    id: 78,
    title: '78. Sum of Squares of N Natural Numbers',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      <strong>Goal:</strong> Your task is to calculate the sum of the squares of the first <code>N</code> natural numbers.
      <br/><br/>
      This means you need to compute the result of the series: <code>1² + 2² + 3² + ... + N²</code>.
    `,
    examples: [
      { input: 'N = 3', output: '14', explanation: '1*1 + 2*2 + 3*3 = 1 + 4 + 9 = 14' },
      { input: 'N = 1', output: '1', explanation: '1*1 = 1' },
      { input: 'N = 5', output: '55', explanation: '1 + 4 + 9 + 16 + 25 = 55' }
    ],
    constraints: ['`1 <= N <= 1000`']
};
const HARMONIC_SERIES: Problem = {
    id: 79,
    title: '79. Harmonic Series',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      The harmonic series is the sum of the reciprocals of the positive integers.
      <br/><br/>
      <strong>Goal:</strong> Your task is to calculate the sum of the first <code>N</code> terms of the series: <code>1 + 1/2 + 1/3 + ... + 1/N</code>. The result should be a floating-point number, formatted to two decimal places.
    `,
    examples: [
      { input: 'N = 3', output: '1.83', explanation: '1 + 0.5 + 0.333... ≈ 1.83' },
      { input: 'N = 1', output: '1.00' },
      { input: 'N = 5', output: '2.28', explanation: '1 + 0.5 + 0.333 + 0.25 + 0.2 ≈ 2.28' }
    ],
    constraints: ['`1 <= N <= 1000`']
};
const DIGITS_COUNT: Problem = {
    id: 80,
    title: '80. Digits Count',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      <strong>Goal:</strong> Your task is to count the total number of digits present in a given integer <code>N</code>.
      <br/><br/>
      For example, the number 123 has 3 digits.
    `,
    examples: [
      { input: 'N = 12345', output: '5' },
      { input: 'N = 987', output: '3' },
      { input: 'N = 0', output: '1', explanation: 'The number 0 has a single digit.' }
    ],
    constraints: ['`0 <= N <= 1000000`']
};
const SQUARE_PATTERN: Problem = {
    id: 81,
    title: '81. Square Pattern',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      <strong>Goal:</strong> Your task is to print a solid square pattern of asterisks (<code>*</code>) of size <code>N x N</code>.
      <br/><br/>
      The output should consist of <code>N</code> lines, and each line should contain <code>N</code> asterisks. Use <code>&lt;br/&gt;</code> for newlines.
    `,
    examples: [
      { input: 'N = 3', output: '***<br/>***<br/>***' },
      { input: 'N = 1', output: '*' },
      { input: 'N = 5', output: '*****<br/>*****<br/>*****<br/>*****<br/>*****' }
    ],
    constraints: ['`1 <= N <= 50`']
};
const PYRAMID_PATTERN: Problem = {
    id: 82,
    title: '82. Pyramid Pattern',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      <strong>Goal:</strong> Your task is to print a pyramid pattern of asterisks (<code>*</code>) with a height of <code>N</code> rows.
      <br/><br/>
      Each row should be centered with spaces. Use <code>&amp;nbsp;</code> for spaces and <code>&lt;br/&gt;</code> for newlines. The top of the pyramid has 1 star, the next row has 3, and so on.
    `,
    examples: [
      { input: 'N = 3', output: '&nbsp;&nbsp;*<br/>&nbsp;***<br/>*****' },
      { input: 'N = 1', output: '*' },
      { input: 'N = 4', output: '&nbsp;&nbsp;&nbsp;*<br/>&nbsp;&nbsp;***<br/>&nbsp;*****<br/>*******' }
    ],
    constraints: ['`1 <= N <= 50`']
};
const SWAP_THE_DIGITS: Problem = {
    id: 83,
    title: '83. Swap the First and Last Digits',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      <strong>Goal:</strong> Your task is to take an integer <code>N</code> and create a new number by swapping its first and last digits.
      <br/><br/>
      For example, if the input is 1234, the first digit (1) and last digit (4) should be swapped to produce 4231.
    `,
    examples: [
      { input: 'N = 1234', output: '4231' },
      { input: 'N = 56', output: '65' },
      { input: 'N = 90871', output: '10879' }
    ],
    constraints: ['`10 <= N <= 1000000`']
};
const PERFECT_CUBES: Problem = {
    id: 84,
    title: '84. Find Perfect Cubes',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      A <strong>perfect cube</strong> is a number that is the result of multiplying an integer by itself three times (e.g., <code>2*2*2 = 8</code>).
      <br/><br/>
      <strong>Goal:</strong> Your task is to find and print all perfect cubes that are less than or equal to a given number <code>N</code>, separated by spaces.
    `,
    examples: [
      { input: 'N = 100', output: '1 8 27 64' },
      { input: 'N = 1', output: '1' },
      { input: 'N = 200', output: '1 8 27 64 125' }
    ],
    constraints: ['`1 <= N <= 100000`']
};
const ROMAN_NUMERALS: Problem = {
    id: 85,
    title: '85. Integer to Roman Numerals',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      <strong>Goal:</strong> Your task is to convert a given integer <code>N</code> into its Roman numeral representation.
      <br/><br/>
      Roman numerals are represented by seven different symbols: I (1), V (5), X (10), L (50), C (100), D (500) and M (1000).
    `,
    examples: [
      { input: 'N = 14', output: 'XIV' },
      { input: 'N = 58', output: 'LVIII' },
      { input: 'N = 1994', output: 'MCMXCIV' }
    ],
    constraints: ['`1 <= N <= 3999`']
};
const SUM_OF_N_ODD_AND_EVEN_NUMBERS: Problem = {
    id: 86,
    title: '86. Sum of Odd and Even Numbers',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      <strong>Goal:</strong> Your task is to separately calculate the sum of all even numbers and the sum of all odd numbers from 1 up to a given limit <code>N</code> (inclusive).
      <br/><br/>
      The output should be a string in the format "Even sum: [sum], Odd sum: [sum]".
    `,
    examples: [
      { input: 'N = 10', output: 'Even sum: 30, Odd sum: 25', explanation: 'Evens: 2+4+6+8+10=30. Odds: 1+3+5+7+9=25.' },
      { input: 'N = 1', output: 'Even sum: 0, Odd sum: 1' },
      { input: 'N = 5', output: 'Even sum: 6, Odd sum: 9' }
    ],
    constraints: ['`1 <= N <= 1000`']
};
const DETECTING_NARCISSISTIC_NUMBERS: Problem = {
    id: 87,
    title: '87. Detecting Narcissistic Numbers',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      An <strong>Armstrong number</strong> (or Narcissistic Number) is an n-digit number that is equal to the sum of the nth powers of its digits.
      <br/><br/>
      For example, 153 is a 3-digit number and <code>1³ + 5³ + 3³ = 1 + 125 + 27 = 153</code>.
      <br/><br/>
      <strong>Goal:</strong> Your task is to check if a given number <code>N</code> is an Armstrong number and return 'true' or 'false'.
    `,
    examples: [
      { input: 'N = 153', output: 'true' },
      { input: 'N = 1634', output: 'true', explanation: '1⁴ + 6⁴ + 3⁴ + 4⁴ = 1 + 1296 + 81 + 256 = 1634' },
      { input: 'N = 370', output: 'true', explanation: '3³ + 7³ + 0³ = 27 + 343 + 0 = 370' }
    ],
    constraints: ['`1 <= N <= 100000`']
};
const DIGIT_SUM_CALCULATOR: Problem = {
    id: 88,
    title: '88. Digit Sum Calculator',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      <strong>Goal:</strong> Your task is to calculate the sum of the digits of a given integer <code>N</code>.
      <br/><br/>
      For example, if the input is 123, the sum is 1 + 2 + 3 = 6.
    `,
    examples: [
      { input: 'N = 123', output: '6', explanation: '1 + 2 + 3 = 6' },
      { input: 'N = 9876', output: '30', explanation: '9 + 8 + 7 + 6 = 30' },
      { input: 'N = 5', output: '5' }
    ],
    constraints: ['`0 <= N <= 1000000`']
};
const ALPHABET_TRIANGLE_GENERATOR: Problem = {
    id: 89,
    title: '89. Alphabet Triangle Generator',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      <strong>Goal:</strong> Your task is to print a triangle pattern using alphabets. The triangle should have <code>N</code> rows, where the first row has one 'A', the second has two 'B's, the third has three 'C's, and so on.
      <br/><br/>
      Use <code>&lt;br/&gt;</code> for newlines.
    `,
    examples: [
      { input: 'N = 3', output: 'A<br/>BB<br/>CCC' },
      { input: 'N = 1', output: 'A' },
      { input: 'N = 5', output: 'A<br/>BB<br/>CCC<br/>DDDD<br/>EEEEE' }
    ],
    constraints: ['`1 <= N <= 26`']
};
const FINDING_THE_NEXT_PALINDROME: Problem = {
    id: 90,
    title: '90. Finding the Next Palindrome',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      A <strong>palindrome</strong> is a number that reads the same forwards and backward (e.g., 121, 353).
      <br/><br/>
      <strong>Goal:</strong> Your task is to find the smallest palindromic number that is <strong>strictly greater</strong> than the given number <code>N</code>.
    `,
    examples: [
      { input: 'N = 121', output: '131' },
      { input: 'N = 808', output: '818' },
      { input: 'N = 99', output: '101' }
    ],
    constraints: ['`1 <= N <= 100000`']
};
const FINDING_CONSECUTIVE_PALINDROMIC_NUMBERS: Problem = {
    id: 91,
    title: '91. Finding Palindromic Numbers in a Range',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      A <strong>palindrome</strong> is a number that reads the same forwards and backward (e.g., 121, 353).
      <br/><br/>
      <strong>Goal:</strong> Your task is to find all palindromic numbers from 1 up to a given limit <code>N</code> (inclusive) and print them separated by spaces.
    `,
    examples: [
      { input: 'N = 100', output: '1 2 3 4 5 6 7 8 9 11 22 33 44 55 66 77 88 99' },
      { input: 'N = 8', output: '1 2 3 4 5 6 7 8' },
      { input: 'N = 125', output: '1 2 3 4 5 6 7 8 9 11 22 33 44 55 66 77 88 99 101 111 121' }
    ],
    constraints: ['`1 <= N <= 1000`']
};
const GENERATING_PALINDROMIC_RIGHT_ANGLED_TRIANGLE: Problem = {
    id: 92,
    title: '92. Generating Palindromic Right-Angled Triangle',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      <strong>Goal:</strong> Your task is to print a right-angled triangle pattern of height <code>N</code> where each row is a palindrome of numbers.
      <br/><br/>
      For example, the 4th row is 1234321. Use <code>&lt;br/&gt;</code> for newlines.
    `,
    examples: [
      { input: 'N = 4', output: '1<br/>121<br/>12321<br/>1234321' },
      { input: 'N = 1', output: '1' },
      { input: 'N = 2', output: '1<br/>121' }
    ],
    constraints: ['`1 <= N <= 9`']
};
// FIX: Corrected a malformed and confusing example explanation for problem ID 93.
const THE_PALINDROMIC_SUM: Problem = {
    id: 93,
    title: '93. The Palindromic Sum',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      Start with a number <code>N</code>. If it is not a palindrome, reverse it and add it to the original number. Repeat this process until the sum becomes a palindrome.
      <br/><br/>
      <strong>Goal:</strong> Your task is to find this resulting palindrome.
    `,
    examples: [
      { input: 'N = 56', output: '121', explanation: '56 is not a palindrome. 56 + 65 (reverse) = 121, which is a palindrome.' },
      { input: 'N = 87', output: '4884', explanation: '87 + 78 = 165; 165 + 561 = 726; 726 + 627 = 1353; 1353 + 3531 = 4884, which is a palindrome.' },
      { input: 'N = 19', output: '121', explanation: '19 + 91 = 110. 110 + 011 = 121, which is a palindrome.' }
    ],
    constraints: ['`1 <= N <= 1000`']
};
const PATTERN_PRINTING_WITH_MULTIPLES_OF_5: Problem = {
    id: 94,
    title: '94. Pattern Printing with Multiples of 5',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      <strong>Goal:</strong> Your task is to print a right-angled triangle pattern of height <code>N</code>. The numbers in the pattern should be consecutive multiples of 5, starting from 5.
      <br/><br/>
      Use spaces between numbers and <code>&lt;br/&gt;</code> for newlines.
    `,
    examples: [
      { input: 'N = 4', output: '5<br/>10 15<br/>20 25 30<br/>35 40 45 50' },
      { input: 'N = 1', output: '5' },
      { input: 'N = 2', output: '5<br/>10 15' }
    ],
    constraints: ['`1 <= N <= 20`']
};
// FIX: Clarified a confusing problem description and corrected a malformed example explanation for problem ID 95, which was causing parsing errors.
const SQUARES_OF_EVEN_NUMBERS_ODD_NUMBER_SERIES: Problem = {
    id: 95,
    title: '95. Squares of Even & Series of Odd Numbers',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      <strong>Goal:</strong> Your task is to print a series of numbers up to <code>N</code> terms, separated by spaces, following these rules:
      <ul>
        <li>If a term's position (i, starting from 1) is <strong>odd</strong>, the value is the i-th odd number (e.g., for position i=3, the 3rd odd number is 5).</li>
        <li>If a term's position (i) is <strong>even</strong>, the value is the square of the position number (i*i).</li>
      </ul>
    `,
    examples: [
      { input: 'N = 5', output: '1 4 5 16 9', explanation: 'The series is generated based on term position: Term 1 (odd): 1st odd number is 1. Term 2 (even): 2*2=4. Term 3 (odd): 3rd odd number is 5. Term 4 (even): 4*4=16. Term 5 (odd): 5th odd number is 9.'},
      { input: 'N = 2', output: '1 4' },
      { input: 'N = 6', output: '1 4 5 16 9 36' }
    ],
    constraints: ['`1 <= N <= 1000`']
};
const PRIME_PATTERN: Problem = {
    id: 96,
    title: '96. Prime Pattern',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      <strong>Goal:</strong> Your task is to print a right-angled triangle pattern of height <code>N</code> using consecutive prime numbers, starting from 2.
      <br/><br/>
      Use spaces between numbers and <code>&lt;br/&gt;</code> for newlines.
    `,
    examples: [
      { input: 'N = 4', output: '2<br/>3 5<br/>7 11 13<br/>17 19 23 29' },
      { input: 'N = 1', output: '2' },
      { input: 'N = 2', output: '2<br/>3 5' }
    ],
    constraints: ['`1 <= N <= 10`']
};
const LCM_FINDER: Problem = {
    id: 97,
    title: '97. LCM Finder',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      The <strong>Least Common Multiple (LCM)</strong> of two integers is the smallest positive integer that is divisible by both numbers without leaving a remainder.
      <br/><br/>
      <strong>Goal:</strong> Your task is to find the LCM of two given integers <code>a</code> and <code>b</code>.
    `,
    examples: [
      { input: 'a = 12, b = 18', output: '36' },
      { input: 'a = 5, b = 7', output: '35', explanation: 'For prime numbers, the LCM is their product.' },
      { input: 'a = 6, b = 12', output: '12', explanation: 'If one number is a multiple of the other, the LCM is the larger number.' }
    ],
    constraints: ['`1 <= a, b <= 1000`']
};
const THE_PERFECT_NUMBER_DETECTIVE: Problem = {
    id: 98,
    title: '98. The Perfect Number Detective',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      A <strong>perfect number</strong> is a positive integer that is equal to the sum of its proper divisors (all positive divisors excluding the number itself).
      <br/><br/>
      For example, the proper divisors of 6 are 1, 2, and 3, and their sum is 1+2+3=6. So, 6 is a perfect number.
      <br/><br/>
      <strong>Goal:</strong> Your task is to check if a number <code>N</code> is a perfect number and return 'true' or 'false'.
    `,
    examples: [
      { input: 'N = 28', output: 'true', explanation: 'Proper divisors are 1, 2, 4, 7, 14. Their sum is 28.' },
      { input: 'N = 6', output: 'true' },
      { input: 'N = 12', output: 'false', explanation: 'Sum of proper divisors is 1+2+3+4+6 = 16, which is not 12.' }
    ],
    constraints: ['`1 <= N <= 10000`']
};
const HANDSHAKE_SIMULATION_PROGRAM: Problem = {
    id: 99,
    title: '99. Handshake Simulation Program',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      In a room of <code>N</code> people, every person shakes hands with every other person exactly once.
      <br/><br/>
      <strong>Goal:</strong> Your task is to calculate the total number of handshakes that will occur.
    `,
    examples: [
      { input: 'N = 10', output: '45' },
      { input: 'N = 2', output: '1', explanation: 'Two people shake hands once.' },
      { input: 'N = 4', output: '6', explanation: 'Person 1 shakes with 3 others. Person 2 shakes with 2 remaining. Person 3 shakes with 1 remaining. 3+2+1=6.' }
    ],
    constraints: ['`1 <= N <= 1000`']
};
const ODD_OR_EVEN_NUMBERS_SERIES: Problem = {
    id: 100,
    title: '100. Odd and Even Numbers Series',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      <strong>Goal:</strong> Your task is to print a series of numbers based on a limit <code>N</code>. First, print all the odd numbers from 1 to <code>N</code>, then print all the even numbers from 1 to <code>N</code>. All numbers should be separated by spaces.
    `,
    examples: [
      { input: 'N = 7', output: '1 3 5 7 2 4 6' },
      { input: 'N = 2', output: '1 2' },
      { input: 'N = 8', output: '1 3 5 7 2 4 6 8' }
    ],
    constraints: ['`1 <= N <= 1000`']
};
const DIGIT_SUMMATION: Problem = {
    id: 101,
    title: '101. Digit Summation',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      <strong>Goal:</strong> Your task is to calculate the sum of the digits of a given integer <code>N</code>. This is the same as problem 88, provided for extra practice.
    `,
    examples: [
      { input: 'N = 12345', output: '15', explanation: '1 + 2 + 3 + 4 + 5 = 15' },
      { input: 'N = 909', output: '18' },
      { input: 'N = 7', output: '7' }
    ],
    constraints: ['`0 <= N <= 1000000`']
};
const VOWEL_COUNTER: Problem = {
    id: 102,
    title: '102. Vowel Counter',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      The vowels in English are 'a', 'e', 'i', 'o', 'u'.
      <br/><br/>
      <strong>Goal:</strong> Your task is to count the number of vowels in a given string, considering both lowercase and uppercase letters.
    `,
    examples: [
      { input: 'str = "Hello World"', output: '3', explanation: 'The vowels are e, o, o.' },
      { input: 'str = "AEIOU"', output: '5' },
      { input: 'str = "Rhythm"', output: '0' }
    ],
    constraints: ['String length will be between 1 and 1000.']
};
const DIGIT_INCREMENTER: Problem = {
    id: 103,
    title: '103. Digit Incrementer',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      <strong>Goal:</strong> Your task is to take an integer, increment each of its digits by one, and form a new number.
      <br/><br/>
      A special rule: If a digit is 9, it should become 0.
    `,
    examples: [
        { input: 'N = 128', output: '239' },
        { input: 'N = 998', output: '9', explanation: '9->0, 9->0, 8->9 results in 009, which is the number 9.' },
        { input: 'N = 450', output: '561' }
    ],
    constraints: ['`1 <= N <= 1000000`']
};
const PRINTING_PATTERN_IN_REVERSE_ORDER: Problem = {
    id: 104,
    title: '104. Printing Pattern in Reverse Order',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      <strong>Goal:</strong> Your task is to print an inverted pyramid pattern of asterisks (<code>*</code>) with a height of <code>N</code> rows.
      <br/><br/>
      The top row should have the most stars, decreasing in subsequent rows. Use <code>&amp;nbsp;</code> for spaces and <code>&lt;br/&gt;</code> for newlines.
    `,
    examples: [
      { input: 'N = 3', output: '*****<br/>&nbsp;***<br/>&nbsp;&nbsp;*' },
      { input: 'N = 1', output: '*' },
      { input: 'N = 4', output: '*******<br/>&nbsp;*****<br/>&nbsp;&nbsp;***<br/>&nbsp;&nbsp;&nbsp;*' }
    ],
    constraints: ['`1 <= N <= 50`']
};
const THE_ODD_FACTORIAL_QUEST: Problem = {
    id: 105,
    title: '105. The Odd Factorial Quest',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      A normal factorial multiplies all integers up to a number (e.g., 5! = 1*2*3*4*5).
      <br/><br/>
      An "odd factorial" multiplies only the <strong>odd integers</strong> up to a number.
      <br/><br/>
      <strong>Goal:</strong> Your task is to calculate the odd factorial of a number <code>N</code>.
    `,
    examples: [
      { input: 'N = 7', output: '105', explanation: '1 * 3 * 5 * 7 = 105' },
      { input: 'N = 1', output: '1' },
      { input: 'N = 8', output: '105', explanation: 'The odd numbers up to 8 are 1, 3, 5, 7. Product is 105.' }
    ],
    constraints: ['`1 <= N <= 25`']
};
const SERIES_EXPANSION: Problem = {
    id: 106,
    title: '106. Alternating Series Sum',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      <strong>Goal:</strong> Your task is to calculate the sum of an alternating series up to <code>N</code> terms.
      <br/><br/>
      The series is: <code>1 - 2 + 3 - 4 + 5 - ... ± N</code>.
    `,
    examples: [
      { input: 'N = 5', output: '3', explanation: '1 - 2 + 3 - 4 + 5 = 3' },
      { input: 'N = 1', output: '1' },
      { input: 'N = 6', output: '-3', explanation: '1 - 2 + 3 - 4 + 5 - 6 = -3' }
    ],
    constraints: ['`1 <= N <= 1000`']
};
const FIBONACCI_EVEN_NUMBER_GENERATOR: Problem = {
    id: 107,
    title: '107. Fibonacci Even Number Generator',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      The Fibonacci series starts 0, 1, 1, 2, 3, 5, 8, ...
      <br/><br/>
      <strong>Goal:</strong> Your task is to find and print all the <strong>even numbers</strong> in the Fibonacci sequence that are less than or equal to a given limit <code>N</code>. The numbers should be separated by spaces.
    `,
    examples: [
      { input: 'N = 400', output: '0 2 8 34 144' },
      { input: 'N = 10', output: '0 2 8' },
      { input: 'N = 1', output: '0' }
    ],
    constraints: ['`1 <= N <= 4000000`']
};
const EXPLORING_THE_GROWTH_SERIES: Problem = {
    id: 108,
    title: '108. Powers of Two Series',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      This series is also known as the powers of 2 (2⁰, 2¹, 2², etc.). Each term is double the previous term, starting with 1.
      <br/><br/>
      <strong>Goal:</strong> Your task is to print the first <code>N</code> terms of this series, separated by spaces.
    `,
    examples: [
      { input: 'N = 5', output: '1 2 4 8 16' },
      { input: 'N = 1', output: '1' },
      { input: 'N = 8', output: '1 2 4 8 16 32 64 128' }
    ],
    constraints: ['`1 <= N <= 30`']
};
const SUM_OF_ALL_PRIME_FACTORS: Problem = {
    id: 109,
    title: '109. Sum of All Prime Factors',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      A <strong>prime factor</strong> is a prime number that divides another number exactly. A number can have multiple prime factors (e.g., prime factors of 12 are 2, 2, 3).
      <br/><br/>
      <strong>Goal:</strong> Your task is to find all the prime factors of a number <code>N</code> and then calculate their sum. Note: each factor should be summed (e.g., for 12, sum is 2+2+3=7).
    `,
    examples: [
      { input: 'N = 30', output: '10', explanation: 'Prime factors of 30 are 2, 3, and 5. Their sum is 2+3+5=10.' },
      { input: 'N = 12', output: '7', explanation: 'Prime factors of 12 are 2, 2, 3. Their sum is 2+2+3=7.' },
      { input: 'N = 17', output: '17', explanation: '17 is prime, so its only prime factor is 17.' }
    ],
    constraints: ['`2 <= N <= 1000`']
};
const SUM_N_ODD_NATURAL_NUMBERS: Problem = {
    id: 110,
    title: '110. Sum of First N Odd Natural Numbers',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      <strong>Goal:</strong> Your task is to calculate the sum of the <strong>first N</strong> odd natural numbers.
      <br/><br/>
      For example, if N=3, you should sum the first three odd numbers, which are 1, 3, and 5.
    `,
    examples: [
      { input: 'N = 5', output: '25', explanation: 'The first 5 odd numbers are 1, 3, 5, 7, 9. Their sum is 25.' },
      { input: 'N = 1', output: '1', explanation: 'The first odd number is 1.' },
      { input: 'N = 3', output: '9', explanation: 'The first 3 odd numbers are 1, 3, 5. Their sum is 9.' }
    ],
    constraints: ['`1 <= N <= 1000`']
};
const CHECK_SECOND_EVEN_NUMBER: Problem = {
    id: 111,
    title: '111. Find Second Even Digit',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      <strong>Goal:</strong> Your task is to find the second even digit (0, 2, 4, 6, 8) in an integer <code>N</code>, reading its digits from left to right.
      <br/><br/>
      If the number does not contain at least two even digits, you should return 0.
    `,
    examples: [
        { input: 'N = 12348', output: '4', explanation: 'The first even digit is 2, the second is 4.' },
        { input: 'N = 13579', output: '0', explanation: 'There are no even digits.' },
        { input: 'N = 81357', output: '0', explanation: 'There is only one even digit.' }
    ],
    constraints: ['`1 <= N <= 1000000`']
};
const FLOYDS_TRIANGLE: Problem = {
    id: 112,
    title: '112. Floyd\'s Triangle',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      <strong>Floyd's Triangle</strong> is a right-angled triangular array of natural numbers, created by filling the rows of the triangle with consecutive numbers, starting with 1.
      <br/><br/>
      <strong>Goal:</strong> Your task is to print a Floyd's Triangle with <code>N</code> rows. Use spaces between numbers and <code>&lt;br/&gt;</code> for newlines.
    `,
    examples: [
      { input: 'N = 4', output: '1<br/>2 3<br/>4 5 6<br/>7 8 9 10' },
      { input: 'N = 1', output: '1' },
      { input: 'N = 3', output: '1<br/>2 3<br/>4 5 6' }
    ],
    constraints: ['`1 <= N <= 20`']
};
const AUTOMORPHIC_NUMBER: Problem = {
    id: 113,
    title: '113. Automorphic Number',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      An <strong>automorphic number</strong> is a number whose square ends in the same digits as the number itself.
      <br/><br/>
      For example, 76² = 57<strong>76</strong>, and 25² = 6<strong>25</strong>.
      <br/><br/>
      <strong>Goal:</strong> Your task is to check if a number <code>N</code> is automorphic and return 'true' or 'false'.
    `,
    examples: [
      { input: 'N = 76', output: 'true' },
      { input: 'N = 25', output: 'true', explanation: '25*25 = 625' },
      { input: 'N = 10', output: 'false', explanation: '10*10 = 100, which does not end in 10.' }
    ],
    constraints: ['`1 <= N <= 10000`']
};
const SUM_OF_FIRST_AND_LAST_DIGIT: Problem = {
    id: 114,
    title: '114. Sum of First and Last Digit',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      <strong>Goal:</strong> Your task is to find the first digit and the last digit of a given integer <code>N</code> and return their sum.
      <br/><br/>
      For single-digit numbers, the first and last digit are the same.
    `,
    examples: [
      { input: 'N = 12345', output: '6', explanation: 'First digit is 1, last digit is 5. Sum is 1+5=6.' },
      { input: 'N = 9', output: '18', explanation: 'First digit is 9, last is 9. Sum is 9+9=18.' },
      { input: 'N = 9087', output: '16', explanation: 'First digit is 9, last is 7. Sum is 9+7=16.' }
    ],
    constraints: ['`1 <= N <= 1000000`']
};
const SUM_OF_EVEN_NUMBERS: Problem = {
    id: 115,
    title: '115. Sum of Even Numbers in a Range',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      <strong>Goal:</strong> Your task is to calculate the sum of all <strong>even</strong> numbers from 1 up to a given limit <code>N</code> (inclusive).
    `,
    examples: [
      { input: 'N = 10', output: '30', explanation: '2 + 4 + 6 + 8 + 10 = 30' },
      { input: 'N = 1', output: '0', explanation: 'There are no even numbers in this range.' },
      { input: 'N = 7', output: '12', explanation: '2 + 4 + 6 = 12' }
    ],
    constraints: ['`1 <= N <= 1000`']
};
const XOR_OPERATIONS: Problem = {
    id: 116,
    title: '116. XOR Sum of Numbers',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      The bitwise <strong>XOR operator (^)</strong> compares each bit of its two operands. If the bits are different, the corresponding result bit is set to 1. Otherwise, it's 0.
      <br/><br/>
      <strong>Goal:</strong> Your task is to find the XOR sum of all numbers from 1 to <code>N</code>. This means calculating <code>1 ^ 2 ^ 3 ^ ... ^ N</code>.
    `,
    examples: [
      { input: 'N = 5', output: '1', explanation: '1^2^3^4^5 = 1' },
      { input: 'N = 1', output: '1' },
      { input: 'N = 7', output: '0' }
    ],
    constraints: ['`1 <= N <= 1000`']
};
const SUM_OF_THE_MIDDLE_DIGITS: Problem = {
    id: 117,
    title: '117. Sum of the Middle Digits',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      <strong>Goal:</strong> Your task is to find the sum of all the digits of a number <code>N</code>, <strong>excluding</strong> its first and last digits.
      <br/><br/>
      If the number has 2 or fewer digits, it has no middle digits, so the sum should be 0.
    `,
    examples: [
        { input: 'N = 12345', output: '9', explanation: 'The middle digits are 2, 3, 4. Their sum is 2 + 3 + 4 = 9.' },
        { input: 'N = 54', output: '0', explanation: 'The number has only two digits, so there are no middle digits.' },
        { input: 'N = 987', output: '8', explanation: 'The only middle digit is 8.' }
    ],
    constraints: ['`1 <= N <= 1000000`']
};
const REVERSE_THE_DIGITS: Problem = {
    id: 118,
    title: '118. Reverse the Digits',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      <strong>Goal:</strong> Your task is to reverse the digits of a given integer <code>N</code>.
      <br/><br/>
      For example, reversing 123 should give 321. Be mindful of trailing zeros; reversing 120 should give 21.
    `,
    examples: [
      { input: 'N = 12345', output: '54321' },
      { input: 'N = 120', output: '21' },
      { input: 'N = 7', output: '7' }
    ],
    constraints: ['`0 <= N <= 1000000`']
};
const PERFECT_SQUARE: Problem = {
    id: 119,
    title: '119. Perfect Square',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      A <strong>perfect square</strong> is an integer that is the square of another integer. In other words, it is the product of some integer with itself (e.g., 9 = 3*3).
      <br/><br/>
      <strong>Goal:</strong> Your task is to check if a given number <code>N</code> is a perfect square and return 'true' or 'false'.
    `,
    examples: [
      { input: 'N = 25', output: 'true', explanation: '25 is the square of 5.' },
      { input: 'N = 26', output: 'false' },
      { input: 'N = 1', output: 'true', explanation: '1 is the square of 1.' }
    ],
    constraints: ['`1 <= N <= 1000000`']
};
const ALPHABETICAL_PATTERN: Problem = {
    id: 120,
    title: '120. Alphabetical Pattern',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      <strong>Goal:</strong> Your task is to print a right-angled triangle pattern of height <code>N</code> using alphabets. Each row should contain consecutive letters starting from 'A'.
      <br/><br/>
      Use <code>&lt;br/&gt;</code> for newlines.
    `,
    examples: [
      { input: 'N = 4', output: 'A<br/>AB<br/>ABC<br/>ABCD' },
      { input: 'N = 1', output: 'A' },
      { input: 'N = 5', output: 'A<br/>AB<br/>ABC<br/>ABCD<br/>ABCDE' }
    ],
    constraints: ['`1 <= N <= 26`']
};
const MULTIPLES_OF_5_PATTERN_PRINTING: Problem = {
    id: 121,
    title: '121. Multiples of 5 - Pattern Printing',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      <strong>Goal:</strong> Your task is to print a right-angled triangle pattern of height <code>N</code>. The numbers in the pattern should be consecutive multiples of 5, starting from 5.
      <br/><br/>
      This is the same as problem 94, provided for extra practice. Use spaces between numbers and <code>&lt;br/&gt;</code> for newlines.
    `,
    examples: [
      { input: 'N = 4', output: '5<br/>10 15<br/>20 25 30<br/>35 40 45 50' },
      { input: 'N = 1', output: '5' },
      { input: 'N = 3', output: '5<br/>10 15<br/>20 25 30' }
    ],
    constraints: ['`1 <= N <= 20`']
};
const PRODUCT_OF_N_DIGITS: Problem = {
    id: 122,
    title: '122. Product of Digits',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      <strong>Goal:</strong> Your task is to calculate the product of the digits of a given number <code>N</code>.
      <br/><br/>
      If the number contains a 0, the total product will naturally be 0.
    `,
    examples: [
      { input: 'N = 123', output: '6', explanation: '1 * 2 * 3 = 6' },
      { input: 'N = 450', output: '0', explanation: '4 * 5 * 0 = 0' },
      { input: 'N = 7', output: '7' }
    ],
    constraints: ['`0 <= N <= 1000000`']
};
const PRIME_NUMBER_IN_RANGE: Problem = {
    id: 123,
    title: '123. Prime Number in Range',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      A <strong>prime number</strong> is a natural number greater than 1 that has no positive divisors other than 1 and itself.
      <br/><br/>
      <strong>Goal:</strong> Your task is to find and print all prime numbers within a given inclusive range (from <code>start</code> to <code>end</code>), separated by spaces.
    `,
    examples: [
      { input: 'start = 1, end = 10', output: '2 3 5 7' },
      { input: 'start = 20, end = 30', output: '23 29' },
      { input: 'start = 90, end = 100', output: '97' }
    ],
    constraints: ['`1 <= start <= end <= 1000`']
};
const HARSHAD_NUMBER: Problem = {
    id: 124,
    title: '124. Harshad Number',
    difficulty: 'Easy',
    level: 'Loops',
    description: `
      A <strong>Harshad number</strong> (or Niven number) is an integer that is divisible by the sum of its digits.
      <br/><br/>
      For example, 18 is a Harshad number because the sum of its digits (1 + 8 = 9) divides 18 evenly.
      <br/><br/>
      <strong>Goal:</strong> Your task is to check if a number <code>N</code> is a Harshad number and return 'true' or 'false'.
    `,
    examples: [
      { input: 'N = 18', output: 'true', explanation: 'Sum of digits is 9. 18 is divisible by 9.' },
      { input: 'N = 19', output: 'false', explanation: 'Sum of digits is 10. 19 is not divisible by 10.' },
      { input: 'N = 156', output: 'true', explanation: 'Sum of digits is 12. 156 is divisible by 12.' }
    ],
    constraints: ['`1 <= N <= 10000`']
};

export const ALL_PROBLEMS: Problem[] = [
    TWO_SUM_PROBLEM, 
    THREE_SUM_PROBLEM,
    AVERAGE_OF_ARRAY,
    FIND_MAXIMUM,
    REVERSE_ARRAY,
    IS_SORTED,
    REMOVE_DUPLICATES,
    SECOND_LARGEST,
    LEFT_ROTATE,
    COUNT_OCCURRENCES,
    REPLACE_PEAK_WITH_NEIGHBOR_SUM,
    SUM_OF_BOUNDARY_ELEMENTS,
    COUNT_REPEATED_ELEMENTS,
    ANGLE_TO_COSINE,
    SUM_OF_TWO_LARGEST,
    COUNT_POSITIVE_ELEMENTS,
    ADD_TO_ARRAY_FORM,
    FIND_PRIMES,
    FIRST_REPEATED_ELEMENT,
    FIND_MIDDLE_ELEMENT,
    FILTER_NON_PRIMES,
    NON_PRIME_FREQUENCY,
    MAJORITY_ELEMENT,
    FILTER_ODD_NUMBERS,
    REMOVE_EVEN_AT_EVEN_INDEX,
    CHUNK_ARRAY,
    ELEMENT_FREQUENCIES,
    REMOVE_FIRST_OCCURRENCE,
    FIND_MEDIAN,
    COUNT_DIVISIBLE,
    CYCLIC_PERMUTATION,
    ASSIGN_RANKS,
    FIND_PEAK_ELEMENT,
    SUMMARY_RANGES,
    TWO_SUM_CLOSEST_TO_ZERO,
    ALTERNATE_ELEMENTS_REVERSE,
    // Newly Added Problems
    THIRD_LARGEST_ELEMENT,
    REVERSE_ARRAY_IN_GROUPS,
    ROTATE_ARRAY_RIGHT,
    THREE_GREAT_CANDIDATES,
    MAX_CONSECUTIVE_ONES,
    MOVE_ALL_ZEROES_TO_END,
    WAVE_ARRAY,
    PLUS_ONE,
    STOCK_BUY_SELL_ONE,
    STOCK_BUY_SELL_MULTI,
    ALTERNATE_POSITIVE_NEGATIVE,
    ARRAY_LEADERS,
    MISSING_AND_REPEATING,
    MISSING_RANGES,
    SUM_OF_ALL_SUBARRAYS,
    NEXT_PERMUTATION,
    MAJORITY_ELEMENT_II,
    MINIMIZE_THE_HEIGHTS_II,
    MAX_SUBARRAY_SUM,
    MAX_PRODUCT_SUBARRAY,
    PRODUCT_OF_ARRAY_EXCEPT_SELF,
    SUBARRAYS_WITH_PRODUCT_LESS_THAN_K,
    SPLIT_INTO_THREE_EQUAL_SUM,
    MAX_CONSECUTIVE_ONES_FLIP,
    LAST_MOMENT_ANTS_FALL,
    INTERSECTION_INTERVAL_LISTS,
    REARRANGE_ARRAY_BY_SIGN,
    MEETING_SCHEDULER,
    LONGEST_MOUNTAIN_SUBARRAY,
    TRANSFORM_AND_SORT_ARRAY,
    MIN_SWAPS_GROUP_ONES,
    MIN_MOVES_EQUALIZE_ARRAY,
    MIN_INDICES_EVEN_ODD_SUM,
    // Loops problems
    FIBONACCI_SERIES,
    SMALLEST_PRIME_NUMBER,
    PRIME_OR_COMPOSITE_NUMBER,
    SERIES_SUM_CALCULATOR,
    DIVISOR_SUM_AND_EQUALITY_CHECKER,
    ABUNDANT_NUMBER,
    COUNTED_THE_NUMBER_OF_LEAP_AND_NON_LEAP_YEARS,
    GEOMETRIC_SERIES_SUM_CALCULATOR,
    SUM_OF_SQUARES_OF_N_NATURAL_NUMBERS,
    HARMONIC_SERIES,
    DIGITS_COUNT,
    SQUARE_PATTERN,
    PYRAMID_PATTERN,
    SWAP_THE_DIGITS,
    PERFECT_CUBES,
    ROMAN_NUMERALS,
    SUM_OF_N_ODD_AND_EVEN_NUMBERS,
    DETECTING_NARCISSISTIC_NUMBERS,
    DIGIT_SUM_CALCULATOR,
    ALPHABET_TRIANGLE_GENERATOR,
    FINDING_THE_NEXT_PALINDROME,
    FINDING_CONSECUTIVE_PALINDROMIC_NUMBERS,
    GENERATING_PALINDROMIC_RIGHT_ANGLED_TRIANGLE,
    THE_PALINDROMIC_SUM,
    PATTERN_PRINTING_WITH_MULTIPLES_OF_5,
    SQUARES_OF_EVEN_NUMBERS_ODD_NUMBER_SERIES,
    PRIME_PATTERN,
    LCM_FINDER,
    THE_PERFECT_NUMBER_DETECTIVE,
    HANDSHAKE_SIMULATION_PROGRAM,
    ODD_OR_EVEN_NUMBERS_SERIES,
    DIGIT_SUMMATION,
    VOWEL_COUNTER,
    DIGIT_INCREMENTER,
    PRINTING_PATTERN_IN_REVERSE_ORDER,
    THE_ODD_FACTORIAL_QUEST,
    SERIES_EXPANSION,
    FIBONACCI_EVEN_NUMBER_GENERATOR,
    EXPLORING_THE_GROWTH_SERIES,
    SUM_OF_ALL_PRIME_FACTORS,
    SUM_N_ODD_NATURAL_NUMBERS,
    CHECK_SECOND_EVEN_NUMBER,
    FLOYDS_TRIANGLE,
    AUTOMORPHIC_NUMBER,
    SUM_OF_FIRST_AND_LAST_DIGIT,
    SUM_OF_EVEN_NUMBERS,
    XOR_OPERATIONS,
    SUM_OF_THE_MIDDLE_DIGITS,
    REVERSE_THE_DIGITS,
    PERFECT_SQUARE,
    ALPHABETICAL_PATTERN,
    MULTIPLES_OF_5_PATTERN_PRINTING,
    PRODUCT_OF_N_DIGITS,
    PRIME_NUMBER_IN_RANGE,
    HARSHAD_NUMBER
];

export const DEFAULT_SNIPPETS: CodeSnippets = {
  C: `#include <stdio.h>
#include <stdlib.h>

/*
 * Please implement the function required by the problem description.
 * The function signature will vary depending on the problem.
 * 
 * For example, for "Find Maximum Element", you might implement:
 * int findMax(int* nums, int numsSize) {
 *     // Your code here
 * }
 * 
 * Make sure your main function or the function you implement
 * matches what the problem expects for evaluation.
 */
`,
};