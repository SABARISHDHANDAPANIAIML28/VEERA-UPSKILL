import { Problem, CodeSnippets, Language, UserProfile } from './types';

export const LANGUAGES: Language[] = ['C'];

export const ADMIN_PASSWORD = 'veerasabarishd@090906';

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
  description: 'Given an array of integers, calculate and return the average of its elements. The result should be an integer (integer division).',
  examples: [{ input: 'nums = [1, 2, 3, 4, 5]', output: '3' }],
  constraints: ['`1 <= nums.length <= 1000`', '`0 <= nums[i] <= 1000`']
};

const FIND_MAXIMUM: Problem = {
  id: 4,
  title: '4. Find Maximum Element',
  difficulty: 'Easy',
  description: 'Given an array of integers, find and return the largest element in the array.',
  examples: [{ input: 'nums = [2, 52, 86, 489, 21]', output: '489' }],
  constraints: ['`1 <= nums.length <= 1000`', '`-10^5 <= nums[i] <= 10^5`']
};

const REVERSE_ARRAY: Problem = {
  id: 5,
  title: '5. Reverse an Array',
  difficulty: 'Easy',
  description: 'Given an array of integers, reverse its elements and return the reversed array.',
  examples: [{ input: 'nums = [1, 2, 3, 4, 5]', output: '[5, 4, 3, 2, 1]' }],
  constraints: ['`1 <= nums.length <= 1000`']
};

const IS_SORTED: Problem = {
  id: 6,
  title: '6. Check if Array is Sorted',
  difficulty: 'Easy',
  description: 'Given an array of integers, determine if the array is sorted in non-decreasing order. Return 1 if it is sorted, and 0 otherwise.',
  examples: [
    { input: 'nums = [1, 2, 3, 4, 5]', output: '1' },
    { input: 'nums = [5, 2, 3, 4, 1]', output: '0' }
  ],
  constraints: ['`1 <= nums.length <= 1000`']
};

const REMOVE_DUPLICATES: Problem = {
  id: 7,
  title: '7. Remove Duplicates',
  difficulty: 'Easy',
  description: 'Given a sorted array of integers, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Return the new length of the array.',
  examples: [{ input: 'nums = [1, 1, 2, 2, 3]', output: '3 (The array becomes [1, 2, 3, _, _])' }],
  constraints: ['`1 <= nums.length <= 1000`', 'The array is sorted in non-decreasing order.']
};

const SECOND_LARGEST: Problem = {
  id: 8,
  title: '8. Second Largest Element',
  difficulty: 'Medium',
  description: 'Given an array of unique integers, find and return the second largest element in the array.',
  examples: [{ input: 'nums = [77, 96, 85, 12, 425, 525]', output: '425' }],
  constraints: ['`2 <= nums.length <= 1000`', 'All elements are unique.']
};

const LEFT_ROTATE: Problem = {
    id: 9,
    title: '9. Left Rotate Array',
    difficulty: 'Easy',
    description: 'Given an array of integers and a number `k`, rotate the array to the left by `k` steps.',
    examples: [{ input: 'nums = [1, 2, 3, 4, 5], k = 2', output: '[3, 4, 5, 1, 2]' }],
    constraints: ['`1 <= nums.length <= 1000`', '`0 <= k < nums.length`']
};

const COUNT_OCCURRENCES: Problem = {
    id: 10,
    title: '10. Number of Occurrences',
    difficulty: 'Easy',
    description: 'Given an array of integers and a target number, count and return the number of times the target appears in the array.',
    examples: [{ input: 'nums = [4, 8, 9, 6, 8, 5, 7, 6], target = 8', output: '2' }],
    constraints: ['`1 <= nums.length <= 1000`']
};

const REPLACE_PEAK_WITH_NEIGHBOR_SUM: Problem = {
    id: 11,
    title: '11. Replace Peak with Neighbor Sum',
    difficulty: 'Medium',
    description: 'A peak element is an element that is strictly greater than its immediate left and right neighbors. Find all peak elements in the array and replace each one with the sum of the peak element itself and its two neighbors. Elements at the boundaries (index 0 and n-1) cannot be peaks.',
    examples: [{ input: 'nums = [1, 2, 4, 3, 5, 2]', output: '[1, 2, 9, 3, 10, 2]', explanation: '4 is a peak, replaced by 2+4+3=9. 5 is a peak, replaced by 3+5+2=10.'}],
    constraints: ['`3 <= nums.length <= 1000`']
};

const SUM_OF_BOUNDARY_ELEMENTS: Problem = {
    id: 12,
    title: '12. Sum of Boundary Elements',
    difficulty: 'Easy',
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
    description: 'Count the total number of occurrences of elements that appear more than once in an array. For example, if a number appears 3 times, it contributes 3 to the total count.',
    examples: [{ input: 'nums = [1, 2, 1, 3, 2, 1]', output: '5', explanation: '1 appears 3 times and 2 appears 2 times. Total count is 3 + 2 = 5.' }],
    constraints: ['`1 <= nums.length <= 1000`']
};

const ANGLE_TO_COSINE: Problem = {
    id: 14,
    title: '14. Angle to Cosine Value',
    difficulty: 'Easy',
    description: 'Given an angle in degrees, first convert it to radians using the formula `radians = degrees * PI / 180`. Then, calculate the cosine of the resulting radian value. Assume `M_PI` is `3.1415926535`. Return the value as a float with 2 decimal places.',
    examples: [{ input: 'angle = 145', output: '-0.82' }],
    constraints: ['`0 <= angle <= 360`']
};

const SUM_OF_TWO_LARGEST: Problem = {
    id: 15,
    title: '15. Sum of Two Largest Numbers',
    difficulty: 'Easy',
    description: 'Given an array of integers, find the two largest distinct numbers and return their sum.',
    examples: [{ input: 'nums = [9, 3, 6, 2, 8, 9]', output: '17', explanation: 'The two largest distinct numbers are 9 and 8.' }],
    constraints: ['`2 <= nums.length <= 1000`']
};

const COUNT_POSITIVE_ELEMENTS: Problem = {
    id: 16,
    title: '16. Count Positive Elements',
    difficulty: 'Easy',
    description: 'Given an array of integers, count and return the number of elements that are strictly greater than 0.',
    examples: [{ input: 'nums = [-1, 0, 1, 2, -3, 4]', output: '3' }],
    constraints: ['`1 <= nums.length <= 1000`']
};

const ADD_TO_ARRAY_FORM: Problem = {
    id: 17,
    title: '17. Add to Array-Form of Integer',
    difficulty: 'Medium',
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
    description: 'Given an array of integers, return a new array containing only the prime numbers from the original array, in the same order. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.',
    examples: [{ input: 'nums = [2, 3, 4, 5, 6, 7, 11, 13, 15]', output: '[2, 3, 5, 7, 11, 13]' }],
    constraints: ['`1 <= nums[i] <= 1000`']
};

const FIRST_REPEATED_ELEMENT: Problem = {
    id: 19,
    title: '19. First Repeated Element',
    difficulty: 'Easy',
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
    description: 'Given an array of integers, return a new array containing only the non-prime numbers in their original order. A non-prime (or composite) number is a positive integer that has at least one divisor other than 1 and itself. Note: 1 is considered a non-prime number.',
    examples: [{ input: 'nums = [1, 2, 3, 4, 5, 6, 7, 8]', output: '[1, 4, 6, 8]' }],
    constraints: ['`1 <= nums[i] <= 1000`']
};

const NON_PRIME_FREQUENCY: Problem = {
    id: 22,
    title: '22. Non-Prime Frequency',
    difficulty: 'Medium',
    description: 'Given an array of integers, count how many non-prime numbers are present. Note: 1 is considered a non-prime number.',
    examples: [{ input: 'nums = [1, 2, 3, 4, 5, 6, 7, 8]', output: '4', explanation: 'The non-primes are 1, 4, 6, and 8.' }],
    constraints: ['`1 <= nums[i] <= 1000`']
};

const MAJORITY_ELEMENT: Problem = {
    id: 23,
    title: '23. Majority Element',
    difficulty: 'Easy',
    description: 'Given an array of size `n`, find the majority element. The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.',
    examples: [{ input: 'nums = [2, 2, 1, 1, 1, 2, 2]', output: '2' }],
    constraints: ['`1 <= n <= 5 * 10^4`']
};

const FILTER_ODD_NUMBERS: Problem = {
    id: 24,
    title: '24. Filter Odd Numbers',
    difficulty: 'Easy',
    description: 'Given an array of integers, return a new array containing only the odd numbers from the original array, in their original order.',
    examples: [{ input: 'nums = [1, 2, 3, 4, 5, 6, 7, 8]', output: '[1, 3, 5, 7]' }],
    constraints: ['`1 <= nums.length <= 1000`']
};

const REMOVE_EVEN_AT_EVEN_INDEX: Problem = {
    id: 25,
    title: '25. Remove Even Number at Even Index',
    difficulty: 'Medium',
    description: 'Given an array of integers, remove all elements that are themselves even numbers AND are located at an even index (0, 2, 4, ...). Return the modified array.',
    examples: [{ input: 'nums = [4, 9, 8, 6, 2, 1]', output: '[9, 6, 1]', explanation: '4 (index 0), 8 (index 2), and 2 (index 4) are removed.' }],
    constraints: ['`1 <= nums.length <= 1000`']
};

const CHUNK_ARRAY: Problem = {
    id: 26,
    title: '26. Chunk Array',
    difficulty: 'Easy',
    description: 'Given an array and a chunk size, divide the array into many subarrays where each subarray is of the given length. The final subarray may be smaller.',
    examples: [{ input: 'nums = [1, 2, 3, 4, 5, 6, 7], size = 3', output: '[[1,2,3],[4,5,6],[7]]' }],
    constraints: ['`1 <= nums.length <= 1000`', '`size >= 1`']
};

const ELEMENT_FREQUENCIES: Problem = {
    id: 27,
    title: '27. Element Frequencies',
    difficulty: 'Medium',
    description: 'Given an array of integers, count the frequency of each unique element. Return the result as a list of pairs, where each pair contains the number and its frequency. The order of pairs does not matter.',
    examples: [{ input: 'nums = [1, 5, 2, 1, 4, 2]', output: '[[1, 2], [5, 1], [2, 2], [4, 1]]' }],
    constraints: ['`1 <= nums.length <= 1000`']
};

const REMOVE_FIRST_OCCURRENCE: Problem = {
    id: 28,
    title: '28. Remove First Occurrence',
    difficulty: 'Easy',
    description: 'Given an array and a target number, remove the first occurrence of that number from the array and return the new array.',
    examples: [{ input: 'nums = [1, 2, 3, 2, 4], target = 2', output: '[1, 3, 2, 4]' }],
    constraints: ['`1 <= nums.length <= 1000`']
};

const FIND_MEDIAN: Problem = {
    id: 29,
    title: '29. Find Median of Array',
    difficulty: 'Medium',
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
    description: 'Given an array of integers and a divisor `k`, count and return how many elements in the array are perfectly divisible by `k`.',
    examples: [{ input: 'nums = [2, 4, 5, 8, 9, 12], k = 4', output: '3', explanation: '4, 8, and 12 are divisible by 4.' }],
    constraints: ['`1 <= nums.length <= 1000`', '`k != 0`']
};

const CYCLIC_PERMUTATION: Problem = {
    id: 31,
    title: '31. Cyclic Permutation (Right Shift)',
    difficulty: 'Easy',
    description: 'Perform a single cyclic permutation on an array, which moves the last element to the first position and shifts all other elements one position to the right.',
    examples: [{ input: 'nums = [1, 2, 3, 4, 5]', output: '[5, 1, 2, 3, 4]' }],
    constraints: ['`1 <= nums.length <= 1000`']
};

const ASSIGN_RANKS: Problem = {
    id: 32,
    title: '32. Assign Ranks to Array Elements',
    difficulty: 'Medium',
    description: 'Given an array of unique integers, replace each element with its rank. The rank is 1 for the smallest element, 2 for the second smallest, and so on. Return the array of ranks.',
    examples: [{ input: 'nums = [52, 41, 63, 95, 35]', output: '[3, 2, 4, 5, 1]' }],
    constraints: ['`1 <= nums.length <= 1000`', 'All elements are unique.']
};

const FIND_PEAK_ELEMENT: Problem = {
    id: 33,
    title: '33. Find a Peak Element',
    difficulty: 'Medium',
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
    description: 'You are given a sorted unique integer array `nums`. A range `[a,b]` is the set of all integers from `a` to `b`, inclusive. Return the smallest sorted list of ranges that cover all the numbers in the array exactly. Each range `[a,b]` in the list should be output as "a->b" if a != b, or "a" if a == b.',
    examples: [{ input: 'nums = [0, 1, 2, 4, 5, 7]', output: '["0->2", "4->5", "7"]' }],
    constraints: ['`0 <= nums.length <= 20`', 'Array is sorted and contains unique elements.']
};

const TWO_SUM_CLOSEST_TO_ZERO: Problem = {
    id: 35,
    title: '35. Two Sum Closest to Zero',
    difficulty: 'Medium',
    description: 'Given an array of integers, find two elements whose sum is closest to zero. Return these two elements.',
    examples: [{ input: 'nums = [1, 60, -10, 70, -80, 85]', output: '[-80, 85]', explanation: 'The sum is 5, which is the closest to zero.' }],
    constraints: ['`2 <= nums.length <= 1000`']
};

const ALTERNATE_ELEMENTS_REVERSE: Problem = {
    id: 36,
    title: '36. Alternate Elements in Reverse',
    difficulty: 'Easy',
    description: 'Given an array of integers, return a new array containing the elements at alternate indices (0, 2, 4, ...) but starting from the end of the array.',
    examples: [{ input: 'nums = [1, 2, 3, 4, 5, 6]', output: '[6, 4, 2]' }],
    constraints: ['`1 <= nums.length <= 1000`']
};

// New Easy Problems Start from ID 37
const THIRD_LARGEST_ELEMENT: Problem = {
    id: 37,
    title: '37. Third Largest Element',
    difficulty: 'Easy',
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
    description: 'Given a binary array `nums`, return the maximum number of consecutive `1`s in the array.',
    examples: [
        { input: 'nums = [1, 1, 0, 1, 1, 1]', output: '3' },
        { input: 'nums = [1, 0, 1, 1, 0, 1]', output: '2' }
    ],
    constraints: ['`1 <= nums.length <= 10^5`', '`nums[i]` is either `0` or `1`.']
};

const MOVE_ALL_ZEROES_TO_END: Problem = {
    id: 42,
    title: '42. Move All Zeroes To End',
    difficulty: 'Easy',
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
    description: 'Given an integer array `arr` of size `n`, find the sum of all possible subarrays.',
    examples: [
        { input: 'arr = [1, 2, 3]', output: '20', explanation: 'Subarrays are [1], [2], [3], [1, 2], [2, 3], [1, 2, 3]. Sums are 1, 2, 3, 3, 5, 6. Total sum = 20.' }
    ],
    constraints: ['`1 <= arr.length <= 10^5`']
};

// New Medium Problems Start from ID 52
const NEXT_PERMUTATION: Problem = {
    id: 52,
    title: '52. Next Permutation',
    difficulty: 'Medium',
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
    description: 'Given an array of positive integers `nums` and an integer `k`, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than `k`.',
    examples: [
        { input: 'nums = [10, 5, 2, 6], k = 100', output: '8', explanation: 'The 8 subarrays are [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6].' }
    ],
    constraints: ['`1 <= nums.length <= 3 * 10^4`', '`1 <= k <= 10^9`']
};

const SPLIT_INTO_THREE_EQUAL_SUM: Problem = {
    id: 59,
    title: '59. Split Into Three Equal Sum Segments',
    difficulty: 'Medium',
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
    description: 'Given a binary array `nums`, you can flip at most one `0`. Find the length of the longest continuous subarray of `1`s.',
    examples: [
        { input: 'nums = [1, 0, 1, 1, 0]', output: '4', explanation: 'Flip the first zero to get [1, 1, 1, 1, 0].' }
    ],
    constraints: ['`1 <= nums.length <= 10^5`']
};

const LAST_MOMENT_ANTS_FALL: Problem = {
    id: 61,
    title: '61. Last Moment Before Ants Fall Out of Plank',
    difficulty: 'Medium',
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
    description: 'You are given a 0-indexed integer array `nums`. You can remove any one element from the array. Return the number of indices `i` such that if `nums[i]` is removed, the sum of the remaining even-indexed elements is equal to the sum of the remaining odd-indexed elements.',
    examples: [
        { input: 'nums = [2, 1, 6, 4]', output: '1', explanation: 'If we remove nums[1] (value 1), the array becomes [2, 6, 4]. The sum of even-indexed elements is 2 + 4 = 6, and the sum of odd-indexed elements is 6. They are equal, so index 1 is a valid removal. This is the only such index.' }
    ],
    constraints: ['`1 <= nums.length <= 1000`']
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
    MIN_INDICES_EVEN_ODD_SUM
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
