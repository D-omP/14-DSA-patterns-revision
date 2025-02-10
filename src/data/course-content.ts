interface CourseContent {
  [key: string]: {
    practice: {
      problems: Array<{
        title: string;
        difficulty: 'Easy' | 'Medium' | 'Hard';
        platform: 'LeetCode' | 'GeeksforGeeks' | 'AlgoExpert';
        url: string;
        description: string;
      }>;
    };
    resources: {
      videos: Array<{
        title: string;
        url: string;
        duration: string;
        platform: string;
      }>;
      articles: Array<{
        title: string;
        url: string;
        author: string;
        platform: string;
      }>;
      visualizations: Array<{
        title: string;
        url: string;
        description: string;
      }>;
    };
  };
}

export const courseContent: CourseContent = {
  'two-pointer': {
    practice: {
      problems: [
        {
          title: "Two Sum II - Input Array Is Sorted",
          difficulty: "Easy",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
          description: "Find two numbers in a sorted array that add up to a target."
        },
        {
          title: "3Sum",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/3sum/",
          description: "Find all unique triplets that sum to zero."
        },
        {
          title: "Container With Most Water",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/container-with-most-water/",
          description: "Find two lines that contain the most water."
        },
        {
          title: "Trapping Rain Water",
          difficulty: "Hard",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/trapping-rain-water/",
          description: "Calculate how much water can be trapped between bars."
        },
        {
          title: "Sort Colors",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/sort-colors/",
          description: "Sort array of 0s, 1s, and 2s in-place using Dutch flag algorithm."
        },
        {
          title: "4Sum",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/4sum/",
          description: "Find unique quadruplets that sum to target."
        },
        {
          title: "Valid Palindrome II",
          difficulty: "Easy",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/valid-palindrome-ii/",
          description: "Check if string can be palindrome after deleting at most one character."
        }
      ]
    },
    resources: {
      videos: [
        {
          title: "Two Pointers Technique",
          url: "https://youtu.be/example3",
          duration: "18:30",
          platform: "YouTube"
        },
        {
          title: "Two Pointers in Arrays",
          url: "https://youtu.be/example4",
          duration: "23:15",
          platform: "YouTube"
        },
        {
          title: "Dutch Flag Algorithm",
          url: "https://youtu.be/example5",
          duration: "15:45",
          platform: "YouTube"
        },
        {
          title: "Advanced Two Pointer Problems",
          url: "https://youtu.be/example6",
          duration: "28:30",
          platform: "YouTube"
        }
      ],
      articles: [
        {
          title: "Master Two Pointers Technique",
          url: "https://medium.com/example3",
          author: "Alice Johnson",
          platform: "Medium"
        },
        {
          title: "Two Pointers for Arrays and Strings",
          url: "https://medium.com/example4",
          author: "Robert Chen",
          platform: "Medium"
        },
        {
          title: "Advanced Two Pointer Techniques",
          url: "https://dev.to/example5",
          author: "Sarah Wilson",
          platform: "Dev.to"
        },
        {
          title: "Solving Hard Two Pointer Problems",
          url: "https://medium.com/example6",
          author: "Michael Zhang",
          platform: "Medium"
        }
      ],
      visualizations: [
        {
          title: "Two Pointers Visualization",
          url: "https://visualgo.net/example2",
          description: "Interactive visualization of two pointers technique"
        },
        {
          title: "Two Pointers in Action",
          url: "https://algorithm-visualizer.org/example3",
          description: "Interactive visualization of common two pointer patterns"
        },
        {
          title: "Dutch Flag Problem Visualizer",
          url: "https://www.cs.usfca.edu/~galles/visualization/example4",
          description: "Step by step visualization of three-way partitioning"
        },
        {
          title: "Container With Water Visualization",
          url: "https://visualgo.net/example5",
          description: "Interactive visualization of container with water problem"
        }
      ]
    }
  },
  'sliding-window': {
    practice: {
      problems: [
        {
          title: "Maximum Sum Subarray of Size K",
          difficulty: "Easy",
          platform: "GeeksforGeeks",
          url: "https://practice.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1",
          description: "Find the maximum sum of a contiguous subarray of size K."
        },
        {
          title: "Longest Substring Without Repeating Characters",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
          description: "Find the length of the longest substring without repeating characters."
        },
        {
          title: "Minimum Window Substring",
          difficulty: "Hard",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/minimum-window-substring/",
          description: "Find the minimum window in a string containing all characters of another string."
        },
        {
          title: "Fruit Into Baskets",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/fruit-into-baskets/",
          description: "Maximum fruits you can collect with two baskets."
        },
        {
          title: "Permutation in String",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/permutation-in-string/",
          description: "Find if s2 contains a permutation of s1."
        },
        {
          title: "Max Consecutive Ones III",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/max-consecutive-ones-iii/",
          description: "Longest sequence of 1s after flipping k 0s."
        },
        {
          title: "Sliding Window Maximum",
          difficulty: "Hard",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/sliding-window-maximum/",
          description: "Find maximum element in each sliding window."
        },
        {
          title: "Count Unique Characters of All Substrings",
          difficulty: "Hard",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/",
          description: "Sum of unique characters in all substrings."
        }
      ]
    },
    resources: {
      videos: [
        {
          title: "Sliding Window Technique - Algorithm",
          url: "https://youtu.be/example1",
          duration: "15:24",
          platform: "YouTube"
        },
        {
          title: "Sliding Window Pattern Implementation",
          url: "https://youtu.be/example2",
          duration: "20:15",
          platform: "YouTube"
        },
        {
          title: "Dynamic Sliding Window",
          url: "https://youtu.be/example3",
          duration: "24:30",
          platform: "YouTube"
        },
        {
          title: "Hard Sliding Window Problems",
          url: "https://youtu.be/example4",
          duration: "28:15",
          platform: "YouTube"
        },
        {
          title: "Sliding Window with Multiple Variables",
          url: "https://youtu.be/example5",
          duration: "19:45",
          platform: "YouTube"
        }
      ],
      articles: [
        {
          title: "Understanding Sliding Window Pattern",
          url: "https://medium.com/example1",
          author: "John Doe",
          platform: "Medium"
        },
        {
          title: "Mastering Sliding Window Technique",
          url: "https://dev.to/example2",
          author: "Jane Smith",
          platform: "Dev.to"
        },
        {
          title: "Advanced Sliding Window Patterns",
          url: "https://medium.com/example3",
          author: "Tom Wilson",
          platform: "Medium"
        },
        {
          title: "Sliding Window for Strings",
          url: "https://dev.to/example4",
          author: "Lisa Chen",
          platform: "Dev.to"
        },
        {
          title: "Optimizing Sliding Window Solutions",
          url: "https://medium.com/example5",
          author: "Mark Davis",
          platform: "Medium"
        }
      ],
      visualizations: [
        {
          title: "Sliding Window Visualizer",
          url: "https://visualgo.net/example",
          description: "Interactive visualization of sliding window algorithm"
        },
        {
          title: "Dynamic Window Visualization",
          url: "https://algorithm-visualizer.org/example2",
          description: "Interactive visualization of dynamic sliding window"
        },
        {
          title: "String Window Patterns",
          url: "https://www.cs.usfca.edu/~galles/visualization/example3",
          description: "Visual guide to string sliding window problems"
        },
        {
          title: "Maximum Sliding Window",
          url: "https://visualgo.net/example4",
          description: "Step by step visualization of sliding window maximum"
        }
      ]
    }
  },
  'fast-slow-pointers': {
    practice: {
      problems: [
        {
          title: "Linked List Cycle",
          difficulty: "Easy",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/linked-list-cycle/",
          description: "Determine if a linked list has a cycle in it."
        },
        {
          title: "Middle of the Linked List",
          difficulty: "Easy",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/middle-of-the-linked-list/",
          description: "Find the middle node of a linked list."
        },
        {
          title: "Find the Duplicate Number",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/find-the-duplicate-number/",
          description: "Find the duplicate number using Floyd's algorithm."
        },
        {
          title: "Linked List Cycle II",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/linked-list-cycle-ii/",
          description: "Find the node where cycle begins in a linked list."
        },
        {
          title: "Happy Number",
          difficulty: "Easy",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/happy-number/",
          description: "Determine if a number is happy using cycle detection."
        },
        {
          title: "Palindrome Linked List",
          difficulty: "Easy",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/palindrome-linked-list/",
          description: "Check if a linked list is palindrome using O(1) space."
        },
        {
          title: "Reorder List",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/reorder-list/",
          description: "Reorder list using middle finding and merging."
        },
        {
          title: "Circular Array Loop",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/circular-array-loop/",
          description: "Detect cycles in a circular array using fast-slow pointers."
        }
      ]
    },
    resources: {
      videos: [
        {
          title: "Floyd's Cycle Detection Algorithm",
          url: "https://youtu.be/example1",
          duration: "12:30",
          platform: "YouTube"
        },
        {
          title: "Fast & Slow Pointers Deep Dive",
          url: "https://youtu.be/example2",
          duration: "25:45",
          platform: "YouTube"
        },
        {
          title: "Linked List Cycle Detection Explained",
          url: "https://youtu.be/example3",
          duration: "18:20",
          platform: "YouTube"
        },
        {
          title: "Floyd's Algorithm Implementation",
          url: "https://youtu.be/example4",
          duration: "22:15",
          platform: "YouTube"
        }
      ],
      articles: [
        {
          title: "Understanding Floyd's Algorithm",
          url: "https://medium.com/example1",
          author: "John Doe",
          platform: "Medium"
        },
        {
          title: "Mastering Fast-Slow Pointers",
          url: "https://medium.com/example2",
          author: "Sarah Smith",
          platform: "Medium"
        },
        {
          title: "Cycle Detection in Data Structures",
          url: "https://dev.to/example3",
          author: "Mike Johnson",
          platform: "Dev.to"
        },
        {
          title: "Advanced Applications of Floyd's Algorithm",
          url: "https://medium.com/example4",
          author: "David Chen",
          platform: "Medium"
        }
      ],
      visualizations: [
        {
          title: "Cycle Detection Visualization",
          url: "https://visualgo.net/example1",
          description: "Interactive visualization of Floyd's algorithm"
        },
        {
          title: "Interactive Floyd's Algorithm",
          url: "https://visualgo.net/example2",
          description: "Step by step visualization of cycle detection"
        },
        {
          title: "Fast-Slow Pointer Patterns",
          url: "https://algorithm-visualizer.org/example3",
          description: "Visual guide to common fast-slow pointer patterns"
        },
        {
          title: "Linked List Cycle Visualization",
          url: "https://www.cs.usfca.edu/~galles/visualization/example4",
          description: "Interactive visualization of cycle detection in linked lists"
        }
      ]
    }
  },
  'merge-intervals': {
    practice: {
      problems: [
        {
          title: "Merge Intervals",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/merge-intervals/",
          description: "Merge all overlapping intervals."
        },
        {
          title: "Insert Interval",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/insert-interval/",
          description: "Insert a new interval and merge if necessary."
        },
        {
          title: "Meeting Rooms II",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/meeting-rooms-ii/",
          description: "Find minimum number of meeting rooms required."
        },
        {
          title: "Non-overlapping Intervals",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/non-overlapping-intervals/",
          description: "Find minimum intervals to remove to make rest non-overlapping."
        },
        {
          title: "Employee Free Time",
          difficulty: "Hard",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/employee-free-time/",
          description: "Find common free intervals among all employees."
        },
        {
          title: "Interval List Intersections",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/interval-list-intersections/",
          description: "Find intersections of two interval lists."
        },
        {
          title: "My Calendar I",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/my-calendar-i/",
          description: "Implement calendar booking system with interval checks."
        },
        {
          title: "Car Pooling",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/car-pooling/",
          description: "Determine if car can complete all pickups and drops."
        }
      ]
    },
    resources: {
      videos: [
        {
          title: "Merge Intervals Explained",
          url: "https://youtu.be/example2",
          duration: "15:45",
          platform: "YouTube"
        },
        {
          title: "Interval Problems Deep Dive",
          url: "https://youtu.be/example3",
          duration: "27:30",
          platform: "YouTube"
        },
        {
          title: "Advanced Interval Manipulation",
          url: "https://youtu.be/example4",
          duration: "22:15",
          platform: "YouTube"
        },
        {
          title: "Solving Hard Interval Problems",
          url: "https://youtu.be/example5",
          duration: "31:20",
          platform: "YouTube"
        }
      ],
      articles: [
        {
          title: "Mastering Interval Problems",
          url: "https://medium.com/example2",
          author: "Jane Smith",
          platform: "Medium"
        },
        {
          title: "Efficient Interval Processing",
          url: "https://medium.com/example3",
          author: "Alex Thompson",
          platform: "Medium"
        },
        {
          title: "Interval Problems in System Design",
          url: "https://dev.to/example4",
          author: "Rachel Kim",
          platform: "Dev.to"
        },
        {
          title: "Advanced Interval Algorithms",
          url: "https://medium.com/example5",
          author: "Daniel Lee",
          platform: "Medium"
        }
      ],
      visualizations: [
        {
          title: "Interval Merging Visualizer",
          url: "https://visualgo.net/example2",
          description: "Interactive visualization of interval merging"
        },
        {
          title: "Interactive Interval Operations",
          url: "https://algorithm-visualizer.org/example3",
          description: "Visual guide to interval operations and algorithms"
        },
        {
          title: "Meeting Rooms Scheduler",
          url: "https://www.cs.usfca.edu/~galles/visualization/example4",
          description: "Interactive visualization of meeting room scheduling"
        },
        {
          title: "Interval Tree Operations",
          url: "https://visualgo.net/example5",
          description: "Step by step visualization of interval tree algorithms"
        }
      ]
    }
  },
  'cyclic-sort': {
    practice: {
      problems: [
        {
          title: "Missing Number",
          difficulty: "Easy",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/missing-number/",
          description: "Find the missing number in range [0, n]."
        },
        {
          title: "Find All Numbers Disappeared",
          difficulty: "Easy",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",
          description: "Find all numbers that disappeared in an array."
        },
        {
          title: "Find the Duplicate Number",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/find-the-duplicate-number/",
          description: "Find the duplicate number in array using cyclic sort."
        },
        {
          title: "Find All Duplicates in Array",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/find-all-duplicates-in-an-array/",
          description: "Find all numbers that appear twice in array."
        },
        {
          title: "First Missing Positive",
          difficulty: "Hard",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/first-missing-positive/",
          description: "Find smallest missing positive integer in unsorted array."
        },
        {
          title: "Set Mismatch",
          difficulty: "Easy",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/set-mismatch/",
          description: "Find number that appears twice and missing number."
        },
        {
          title: "Kth Missing Positive Number",
          difficulty: "Easy",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/kth-missing-positive-number/",
          description: "Find kth positive integer missing from array."
        },
        {
          title: "Find the Corrupt Pair",
          difficulty: "Medium",
          platform: "GeeksforGeeks",
          url: "https://practice.geeksforgeeks.org/problems/find-missing-and-repeating2512/1",
          description: "Find both missing and duplicate numbers in array."
        }
      ]
    },
    resources: {
      videos: [
        {
          title: "Cyclic Sort Pattern",
          url: "https://youtu.be/example3",
          duration: "14:20",
          platform: "YouTube"
        },
        {
          title: "Cyclic Sort Deep Dive",
          url: "https://youtu.be/example4",
          duration: "23:45",
          platform: "YouTube"
        },
        {
          title: "Advanced Cyclic Sort Problems",
          url: "https://youtu.be/example5",
          duration: "19:30",
          platform: "YouTube"
        },
        {
          title: "Cyclic Sort Pattern Mastery",
          url: "https://youtu.be/example6",
          duration: "28:15",
          platform: "YouTube"
        }
      ],
      articles: [
        {
          title: "Understanding Cyclic Sort",
          url: "https://medium.com/example3",
          author: "Alex Johnson",
          platform: "Medium"
        },
        {
          title: "Mastering Cyclic Sort",
          url: "https://medium.com/example4",
          author: "Peter Wang",
          platform: "Medium"
        },
        {
          title: "Cyclic Sort in System Design",
          url: "https://dev.to/example5",
          author: "Linda Kim",
          platform: "Dev.to"
        },
        {
          title: "Advanced Array Manipulation",
          url: "https://medium.com/example6",
          author: "Chris Brown",
          platform: "Medium"
        }
      ],
      visualizations: [
        {
          title: "Cyclic Sort Visualization",
          url: "https://visualgo.net/example3",
          description: "Interactive visualization of cyclic sort algorithm"
        },
        {
          title: "Interactive Cyclic Sort",
          url: "https://algorithm-visualizer.org/example4",
          description: "Step by step visualization of cyclic sort algorithm"
        },
        {
          title: "Array Transformation Visualizer",
          url: "https://www.cs.usfca.edu/~galles/visualization/example5",
          description: "Visual guide to array transformation using cyclic sort"
        },
        {
          title: "Missing Numbers Visualization",
          url: "https://visualgo.net/example6",
          description: "Interactive visualization of finding missing/duplicate numbers"
        }
      ]
    }
  },
  'in-place-reversal': {
    practice: {
      problems: [
        {
          title: "Reverse Linked List",
          difficulty: "Easy",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/reverse-linked-list/",
          description: "Reverse a singly linked list."
        },
        {
          title: "Reverse Linked List II",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/reverse-linked-list-ii/",
          description: "Reverse a linked list from position m to n."
        },
        {
          title: "Reverse Nodes in k-Group",
          difficulty: "Hard",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
          description: "Reverse the nodes of a linked list k at a time."
        },
        {
          title: "Rotate List",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/rotate-list/",
          description: "Rotate linked list to the right by k places."
        },
        {
          title: "Swap Nodes in Pairs",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/swap-nodes-in-pairs/",
          description: "Swap every two adjacent nodes in linked list."
        },
        {
          title: "Reverse Alternating K-Length Blocks",
          difficulty: "Hard",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/reverse-nodes-in-k-group-ii/",
          description: "Reverse alternating blocks of k nodes in linked list."
        },
        {
          title: "Reorder List",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/reorder-list/",
          description: "Reorder list L0→Ln→L1→Ln-1→L2→Ln-2."
        },
        {
          title: "Plus One Linked List",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/plus-one-linked-list/",
          description: "Add one to number represented as linked list."
        }
      ]
    },
    resources: {
      videos: [
        {
          title: "In-place Reversal of a LinkedList",
          url: "https://youtu.be/example4",
          duration: "16:20",
          platform: "YouTube"
        },
        {
          title: "Advanced List Reversal Patterns",
          url: "https://youtu.be/example5",
          duration: "24:15",
          platform: "YouTube"
        },
        {
          title: "K-Group Reversal Deep Dive",
          url: "https://youtu.be/example6",
          duration: "28:30",
          platform: "YouTube"
        },
        {
          title: "List Manipulation Techniques",
          url: "https://youtu.be/example7",
          duration: "21:45",
          platform: "YouTube"
        }
      ],
      articles: [
        {
          title: "Understanding In-place Reversal",
          url: "https://medium.com/example4",
          author: "Bob Wilson",
          platform: "Medium"
        },
        {
          title: "Advanced LinkedList Reversals",
          url: "https://medium.com/example5",
          author: "Emma Davis",
          platform: "Medium"
        },
        {
          title: "Mastering K-Group Operations",
          url: "https://dev.to/example6",
          author: "James Wilson",
          platform: "Dev.to"
        },
        {
          title: "In-Place List Manipulation",
          url: "https://medium.com/example7",
          author: "Sophie Chen",
          platform: "Medium"
        }
      ],
      visualizations: [
        {
          title: "LinkedList Reversal Visualizer",
          url: "https://visualgo.net/example4",
          description: "Interactive visualization of linked list reversal"
        },
        {
          title: "K-Group Reversal Visualizer",
          url: "https://algorithm-visualizer.org/example5",
          description: "Interactive visualization of k-group reversal"
        },
        {
          title: "List Reordering Animation",
          url: "https://www.cs.usfca.edu/~galles/visualization/example6",
          description: "Step by step visualization of list reordering"
        },
        {
          title: "Advanced List Operations",
          url: "https://visualgo.net/example7",
          description: "Visual guide to complex list manipulations"
        }
      ]
    }
  },
  'breadth-first-search': {
    practice: {
      problems: [
        {
          title: "Binary Tree Level Order Traversal",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
          description: "Traverse a binary tree in level order."
        },
        {
          title: "Word Ladder",
          difficulty: "Hard",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/word-ladder/",
          description: "Find shortest transformation sequence from start to end word."
        },
        {
          title: "Course Schedule",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/course-schedule/",
          description: "Determine if it's possible to finish all courses."
        },
        {
          title: "Binary Tree Zigzag Level Order Traversal",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
          description: "Traverse binary tree in zigzag level order."
        },
        {
          title: "Rotting Oranges",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/rotting-oranges/",
          description: "Find minimum time for all oranges to rot."
        },
        {
          title: "Perfect Squares",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/perfect-squares/",
          description: "Find least number of perfect squares that sum to n."
        },
        {
          title: "Open the Lock",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/open-the-lock/",
          description: "Find minimum moves to unlock combination lock."
        },
        {
          title: "Shortest Path in Binary Matrix",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/shortest-path-in-binary-matrix/",
          description: "Find shortest clear path in binary matrix."
        }
      ]
    },
    resources: {
      videos: [
        {
          title: "BFS Algorithm Explained",
          url: "https://youtu.be/example5",
          duration: "20:15",
          platform: "YouTube"
        },
        {
          title: "BFS in Graph Problems",
          url: "https://youtu.be/example6",
          duration: "26:45",
          platform: "YouTube"
        },
        {
          title: "Level Order Traversal Deep Dive",
          url: "https://youtu.be/example7",
          duration: "19:30",
          platform: "YouTube"
        },
        {
          title: "Advanced BFS Applications",
          url: "https://youtu.be/example8",
          duration: "23:15",
          platform: "YouTube"
        }
      ],
      articles: [
        {
          title: "Understanding BFS",
          url: "https://medium.com/example5",
          author: "Sarah Brown",
          platform: "Medium"
        },
        {
          title: "BFS in Tree Problems",
          url: "https://medium.com/example6",
          author: "Kevin Wang",
          platform: "Medium"
        },
        {
          title: "Graph Traversal with BFS",
          url: "https://dev.to/example7",
          author: "Maria Garcia",
          platform: "Dev.to"
        },
        {
          title: "Mastering Level Order Problems",
          url: "https://medium.com/example8",
          author: "Ryan Lee",
          platform: "Medium"
        }
      ],
      visualizations: [
        {
          title: "BFS Visualizer",
          url: "https://visualgo.net/example5",
          description: "Interactive visualization of BFS algorithm"
        },
        {
          title: "Interactive BFS Tree Traversal",
          url: "https://algorithm-visualizer.org/example6",
          description: "Step by step visualization of tree traversal"
        },
        {
          title: "Graph BFS Animation",
          url: "https://www.cs.usfca.edu/~galles/visualization/example7",
          description: "Visual guide to BFS in graphs"
        },
        {
          title: "Shortest Path Visualization",
          url: "https://visualgo.net/example8",
          description: "Interactive visualization of BFS shortest path"
        }
      ]
    }
  },
  'depth-first-search': {
    practice: {
      problems: [
        {
          title: "Path Sum",
          difficulty: "Easy",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/path-sum/",
          description: "Find if root-to-leaf path sum exists."
        },
        {
          title: "Number of Islands",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/number-of-islands/",
          description: "Count the number of islands in a grid."
        },
        {
          title: "Course Schedule II",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/course-schedule-ii/",
          description: "Find ordering of courses."
        },
        {
          title: "Binary Tree Maximum Path Sum",
          difficulty: "Hard",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
          description: "Find path with maximum sum in binary tree."
        },
        {
          title: "Clone Graph",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/clone-graph/",
          description: "Deep copy a connected graph structure."
        },
        {
          title: "Pacific Atlantic Water Flow",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
          description: "Find cells that can flow to both oceans."
        },
        {
          title: "Reconstruct Itinerary",
          difficulty: "Hard",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/reconstruct-itinerary/",
          description: "Find valid itinerary from flight tickets."
        },
        {
          title: "Critical Connections",
          difficulty: "Hard",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/critical-connections-in-a-network/",
          description: "Find all critical edges in network using DFS."
        }
      ]
    },
    resources: {
      videos: [
        {
          title: "DFS Algorithm Explained",
          url: "https://youtu.be/example6",
          duration: "18:45",
          platform: "YouTube"
        },
        {
          title: "Advanced DFS Techniques",
          url: "https://youtu.be/example7",
          duration: "27:15",
          platform: "YouTube"
        },
        {
          title: "Graph DFS Applications",
          url: "https://youtu.be/example8",
          duration: "24:30",
          platform: "YouTube"
        },
        {
          title: "Tree DFS Patterns",
          url: "https://youtu.be/example9",
          duration: "21:45",
          platform: "YouTube"
        }
      ],
      articles: [
        {
          title: "Understanding DFS",
          url: "https://medium.com/example6",
          author: "Mike Johnson",
          platform: "Medium"
        },
        {
          title: "DFS in Graph Problems",
          url: "https://medium.com/example7",
          author: "Andrew Chen",
          platform: "Medium"
        },
        {
          title: "Advanced Tree Traversal",
          url: "https://dev.to/example8",
          author: "Julia Park",
          platform: "Dev.to"
        },
        {
          title: "Mastering Graph DFS",
          url: "https://medium.com/example9",
          author: "Thomas Lee",
          platform: "Medium"
        }
      ],
      visualizations: [
        {
          title: "DFS Visualizer",
          url: "https://visualgo.net/example6",
          description: "Interactive visualization of DFS algorithm"
        },
        {
          title: "Interactive Graph DFS",
          url: "https://algorithm-visualizer.org/example7",
          description: "Step by step visualization of graph DFS"
        },
        {
          title: "Tree Traversal Animation",
          url: "https://www.cs.usfca.edu/~galles/visualization/example8",
          description: "Visual guide to tree DFS patterns"
        },
        {
          title: "Network Flow DFS",
          url: "https://visualgo.net/example9",
          description: "Interactive visualization of DFS in networks"
        }
      ]
    }
  },
  'binary-search': {
    practice: {
      problems: [
        {
          title: "Binary Search",
          difficulty: "Easy",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/binary-search/",
          description: "Classic binary search implementation."
        },
        {
          title: "Search in Rotated Sorted Array",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
          description: "Search target in a rotated sorted array."
        },
        {
          title: "Find First and Last Position",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
          description: "Find the range of target element in sorted array."
        },
        {
          title: "Search in 2D Matrix",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/search-a-2d-matrix/",
          description: "Search for target in sorted 2D matrix."
        },
        {
          title: "Find Peak Element",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/find-peak-element/",
          description: "Find any peak element in array."
        },
        {
          title: "Median of Two Sorted Arrays",
          difficulty: "Hard",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
          description: "Find median of two sorted arrays in O(log(m+n))."
        },
        {
          title: "Capacity To Ship Packages",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
          description: "Find minimum capacity to ship packages within D days."
        },
        {
          title: "Split Array Largest Sum",
          difficulty: "Hard",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/split-array-largest-sum/",
          description: "Minimize largest sum among m subarrays."
        }
      ]
    },
    resources: {
      videos: [
        {
          title: "Binary Search Explained",
          url: "https://youtu.be/example7",
          duration: "15:30",
          platform: "YouTube"
        },
        {
          title: "Advanced Binary Search Patterns",
          url: "https://youtu.be/example8",
          duration: "26:45",
          platform: "YouTube"
        },
        {
          title: "Binary Search on Answer",
          url: "https://youtu.be/example9",
          duration: "23:30",
          platform: "YouTube"
        },
        {
          title: "Binary Search in Real Problems",
          url: "https://youtu.be/example10",
          duration: "29:15",
          platform: "YouTube"
        }
      ],
      articles: [
        {
          title: "Mastering Binary Search",
          url: "https://medium.com/example7",
          author: "David Chen",
          platform: "Medium"
        },
        {
          title: "Binary Search Templates",
          url: "https://medium.com/example8",
          author: "Jennifer Liu",
          platform: "Medium"
        },
        {
          title: "Advanced Binary Search Techniques",
          url: "https://dev.to/example9",
          author: "Paul Graham",
          platform: "Dev.to"
        },
        {
          title: "Binary Search in System Design",
          url: "https://medium.com/example10",
          author: "Eric Zhang",
          platform: "Medium"
        }
      ],
      visualizations: [
        {
          title: "Binary Search Visualization",
          url: "https://visualgo.net/example7",
          description: "Interactive visualization of binary search algorithm"
        },
        {
          title: "Interactive Binary Search",
          url: "https://algorithm-visualizer.org/example8",
          description: "Step by step visualization of binary search variations"
        },
        {
          title: "2D Matrix Search Animation",
          url: "https://www.cs.usfca.edu/~galles/visualization/example9",
          description: "Visual guide to binary search in 2D matrix"
        },
        {
          title: "Binary Search on Answer",
          url: "https://visualgo.net/example10",
          description: "Interactive visualization of binary search optimization"
        }
      ]
    }
  },
  'greedy-algorithms': {
    practice: {
      problems: [
        {
          title: "Jump Game",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/jump-game/",
          description: "Determine if you can reach the last index."
        },
        {
          title: "Task Scheduler",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/task-scheduler/",
          description: "Schedule tasks with cooldown period."
        },
        {
          title: "Gas Station",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/gas-station/",
          description: "Find starting gas station for completing circuit."
        },
        {
          title: "Minimum Number of Arrows",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
          description: "Find minimum arrows needed to burst all balloons."
        },
        {
          title: "Maximum Subarray",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/maximum-subarray/",
          description: "Find contiguous subarray with largest sum."
        },
        {
          title: "Partition Labels",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/partition-labels/",
          description: "Partition string into max parts with unique letters."
        },
        {
          title: "Queue Reconstruction",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/queue-reconstruction-by-height/",
          description: "Reconstruct queue based on height and position."
        },
        {
          title: "Non-overlapping Intervals",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/non-overlapping-intervals/",
          description: "Remove minimum intervals to make rest non-overlapping."
        }
      ]
    },
    resources: {
      videos: [
        {
          title: "Greedy Algorithms Explained",
          url: "https://youtu.be/example8",
          duration: "22:15",
          platform: "YouTube"
        },
        {
          title: "Advanced Greedy Techniques",
          url: "https://youtu.be/example9",
          duration: "24:30",
          platform: "YouTube"
        },
        {
          title: "Greedy vs Dynamic Programming",
          url: "https://youtu.be/example10",
          duration: "28:15",
          platform: "YouTube"
        },
        {
          title: "Interval Scheduling Problems",
          url: "https://youtu.be/example11",
          duration: "21:45",
          platform: "YouTube"
        }
      ],
      articles: [
        {
          title: "Understanding Greedy Algorithms",
          url: "https://medium.com/example8",
          author: "Emily Wilson",
          platform: "Medium"
        },
        {
          title: "Mastering Greedy Algorithms",
          url: "https://medium.com/example9",
          author: "David Park",
          platform: "Medium"
        },
        {
          title: "Greedy in System Design",
          url: "https://dev.to/example10",
          author: "Laura Chen",
          platform: "Dev.to"
        },
        {
          title: "Advanced Greedy Patterns",
          url: "https://medium.com/example11",
          author: "Kevin Zhang",
          platform: "Medium"
        }
      ],
      visualizations: [
        {
          title: "Greedy Algorithm Visualizer",
          url: "https://visualgo.net/example8",
          description: "Interactive visualization of greedy algorithms"
        },
        {
          title: "Interactive Greedy Decisions",
          url: "https://algorithm-visualizer.org/example9",
          description: "Step by step visualization of greedy choices"
        },
        {
          title: "Interval Scheduling Visualizer",
          url: "https://www.cs.usfca.edu/~galles/visualization/example10",
          description: "Visual guide to interval scheduling problems"
        },
        {
          title: "Task Scheduling Animation",
          url: "https://visualgo.net/example11",
          description: "Interactive visualization of task scheduling"
        }
      ]
    }
  },
  'backtracking': {
    practice: {
      problems: [
        {
          title: "Subsets",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/subsets/",
          description: "Generate all possible subsets of a set."
        },
        {
          title: "N-Queens",
          difficulty: "Hard",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/n-queens/",
          description: "Place N queens on an NxN chessboard."
        },
        {
          title: "Palindrome Partitioning",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/palindrome-partitioning/",
          description: "Find all possible palindrome partitioning of a string."
        },
        {
          title: "Combination Sum",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/combination-sum/",
          description: "Find all combinations that sum to target."
        },
        {
          title: "Word Search",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/word-search/",
          description: "Search for word in 2D board of characters."
        },
        {
          title: "Generate Parentheses",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/generate-parentheses/",
          description: "Generate all valid parentheses combinations."
        },
        {
          title: "Sudoku Solver",
          difficulty: "Hard",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/sudoku-solver/",
          description: "Solve a Sudoku puzzle using backtracking."
        },
        {
          title: "Letter Combinations",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
          description: "Find all letter combinations of phone number."
        }
      ]
    },
    resources: {
      videos: [
        {
          title: "Backtracking Algorithm Explained",
          url: "https://youtu.be/example9",
          duration: "25:30",
          platform: "YouTube"
        },
        {
          title: "Backtracking Patterns",
          url: "https://youtu.be/example10",
          duration: "28:45",
          platform: "YouTube"
        },
        {
          title: "Solving Sudoku with Backtracking",
          url: "https://youtu.be/example11",
          duration: "32:15",
          platform: "YouTube"
        },
        {
          title: "Combination Problems Deep Dive",
          url: "https://youtu.be/example12",
          duration: "24:30",
          platform: "YouTube"
        }
      ],
      articles: [
        {
          title: "Master Backtracking",
          url: "https://medium.com/example9",
          author: "Frank Miller",
          platform: "Medium"
        },
        {
          title: "Advanced Backtracking Techniques",
          url: "https://medium.com/example10",
          author: "Steve Johnson",
          platform: "Medium"
        },
        {
          title: "Optimizing Backtracking Solutions",
          url: "https://dev.to/example11",
          author: "Nina Patel",
          platform: "Dev.to"
        },
        {
          title: "Backtracking in System Design",
          url: "https://medium.com/example12",
          author: "Mark Wilson",
          platform: "Medium"
        }
      ],
      visualizations: [
        {
          title: "Backtracking Visualizer",
          url: "https://visualgo.net/example9",
          description: "Interactive visualization of backtracking algorithms"
        },
        {
          title: "N-Queens Visualization",
          url: "https://algorithm-visualizer.org/example10",
          description: "Interactive visualization of N-Queens solution"
        },
        {
          title: "Sudoku Solver Animation",
          url: "https://www.cs.usfca.edu/~galles/visualization/example11",
          description: "Step by step visualization of Sudoku solving"
        },
        {
          title: "Combination Generator",
          url: "https://visualgo.net/example12",
          description: "Visual guide to generating combinations"
        }
      ]
    }
  },
  'dynamic-programming': {
    practice: {
      problems: [
        {
          title: "Climbing Stairs",
          difficulty: "Easy",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/climbing-stairs/",
          description: "Count ways to climb n stairs taking 1 or 2 steps."
        },
        {
          title: "Longest Common Subsequence",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/longest-common-subsequence/",
          description: "Find length of longest common subsequence."
        },
        {
          title: "0/1 Knapsack",
          difficulty: "Medium",
          platform: "GeeksforGeeks",
          url: "https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem/0",
          description: "Classic knapsack problem with binary choice."
        },
        {
          title: "Coin Change",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/coin-change/",
          description: "Find fewest coins needed to make amount."
        },
        {
          title: "House Robber",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/house-robber/",
          description: "Maximum amount you can rob without alerting police."
        },
        {
          title: "Edit Distance",
          difficulty: "Hard",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/edit-distance/",
          description: "Find minimum operations to convert string1 to string2."
        },
        {
          title: "Maximum Subarray",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/maximum-subarray/",
          description: "Find contiguous subarray with largest sum."
        },
        {
          title: "Longest Increasing Subsequence",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/longest-increasing-subsequence/",
          description: "Find length of longest increasing subsequence."
        }
      ]
    },
    resources: {
      videos: [
        {
          title: "Dynamic Programming Explained",
          url: "https://youtu.be/example10",
          duration: "30:45",
          platform: "YouTube"
        },
        {
          title: "DP Patterns Deep Dive",
          url: "https://youtu.be/example11",
          duration: "35:20",
          platform: "YouTube"
        },
        {
          title: "State and Transition in DP",
          url: "https://youtu.be/example12",
          duration: "28:45",
          platform: "YouTube"
        },
        {
          title: "Advanced DP Problems",
          url: "https://youtu.be/example13",
          duration: "42:15",
          platform: "YouTube"
        }
      ],
      articles: [
        {
          title: "Introduction to Dynamic Programming",
          url: "https://medium.com/example10",
          author: "Grace Lee",
          platform: "Medium"
        },
        {
          title: "DP Problem Patterns",
          url: "https://medium.com/example11",
          author: "Michael Chen",
          platform: "Medium"
        },
        {
          title: "Mastering DP Solutions",
          url: "https://dev.to/example12",
          author: "Sarah Wilson",
          platform: "Dev.to"
        },
        {
          title: "DP in System Design",
          url: "https://medium.com/example13",
          author: "David Park",
          platform: "Medium"
        }
      ],
      visualizations: [
        {
          title: "DP Algorithm Visualizer",
          url: "https://visualgo.net/example10",
          description: "Interactive visualization of dynamic programming"
        },
        {
          title: "Interactive DP Solutions",
          url: "https://algorithm-visualizer.org/example11",
          description: "Step by step visualization of DP problems"
        },
        {
          title: "State Transition Diagrams",
          url: "https://www.cs.usfca.edu/~galles/visualization/example12",
          description: "Visual guide to DP state transitions"
        },
        {
          title: "Subsequence Problems",
          url: "https://visualgo.net/example13",
          description: "Interactive visualization of subsequence problems"
        }
      ]
    }
  },
  'union-find': {
    practice: {
      problems: [
        {
          title: "Number of Provinces",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/number-of-provinces/",
          description: "Find number of connected components in graph."
        },
        {
          title: "Redundant Connection",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/redundant-connection/",
          description: "Find edge that creates a cycle in graph."
        },
        {
          title: "Accounts Merge",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/accounts-merge/",
          description: "Merge accounts with common emails."
        },
        {
          title: "Graph Valid Tree",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/graph-valid-tree/",
          description: "Check if undirected graph forms valid tree."
        },
        {
          title: "Number of Connected Components",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
          description: "Count connected components in undirected graph."
        },
        {
          title: "Most Stones Removed",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/",
          description: "Remove maximum stones on same row or column."
        },
        {
          title: "Satisfiability of Equations",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/satisfiability-of-equality-equations/",
          description: "Check if equations are satisfiable."
        },
        {
          title: "Smallest String With Swaps",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/smallest-string-with-swaps/",
          description: "Find lexicographically smallest string after swaps."
        }
      ]
    },
    resources: {
      videos: [
        {
          title: "Path Compression Optimization",
          url: "https://youtu.be/example12",
          duration: "24:30",
          platform: "YouTube"
        },
        {
          title: "Union by Rank Explained",
          url: "https://youtu.be/example13",
          duration: "19:45",
          platform: "YouTube"
        },
        {
          title: "Advanced Union-Find Applications",
          url: "https://youtu.be/example14",
          duration: "28:15",
          platform: "YouTube"
        }
      ],
      articles: [
        {
          title: "Optimizing Union-Find",
          url: "https://medium.com/example12",
          author: "Rachel Kim",
          platform: "Medium"
        },
        {
          title: "Union-Find in Graph Problems",
          url: "https://dev.to/example13",
          author: "David Chen",
          platform: "Dev.to"
        },
        {
          title: "Advanced Disjoint Set Applications",
          url: "https://medium.com/example14",
          author: "Michael Park",
          platform: "Medium"
        }
      ],
      visualizations: [
        {
          title: "Interactive Union-Find",
          url: "https://algorithm-visualizer.org/example12",
          description: "Step by step visualization of union operations"
        },
        {
          title: "Graph Component Visualizer",
          url: "https://www.cs.usfca.edu/~galles/visualization/example13",
          description: "Visual guide to connected components"
        },
        {
          title: "Path Compression Animation",
          url: "https://visualgo.net/example14",
          description: "Interactive visualization of path compression"
        }
      ]
    }
  },
  "topological-sort": {
    practice: {
      problems: [
        {
          title: "Course Schedule",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/course-schedule/",
          description: "Determine if it's possible to finish all courses given prerequisites."
        },
        {
          title: "Alien Dictionary",
          difficulty: "Hard",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/alien-dictionary/",
          description: "Find the order of characters in an alien alphabet."
        },
        {
          title: "Minimum Height Trees",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/minimum-height-trees/",
          description: "Find all the MHT root nodes in a tree."
        },
        {
          title: "Course Schedule II",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/course-schedule-ii/",
          description: "Return the ordering of courses you should take to finish all courses."
        },
        {
          title: "Parallel Courses",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/parallel-courses/",
          description: "Find minimum semesters to complete all courses."
        },
        {
          title: "Sequence Reconstruction",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/sequence-reconstruction/",
          description: "Check if sequence can be uniquely reconstructed."
        },
        {
          title: "Build Order",
          difficulty: "Medium",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/build-order/",
          description: "Find valid build order for projects with dependencies."
        },
        {
          title: "Sort Items by Groups",
          difficulty: "Hard",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/",
          description: "Sort items respecting group and dependencies."
        },
        {
          title: "Maximum Path Quality",
          difficulty: "Hard",
          platform: "LeetCode",
          url: "https://leetcode.com/problems/maximum-path-quality-of-a-graph/",
          description: "Find path with maximum quality in directed graph."
        }
      ]
    },
    resources: {
      videos: [
        {
          title: "Topological Sort Algorithm",
          url: "https://youtu.be/example-topo",
          duration: "22:15",
          platform: "YouTube"
        },
        {
          title: "Kahn's Algorithm Deep Dive",
          url: "https://youtu.be/example15",
          duration: "26:30",
          platform: "YouTube"
        },
        {
          title: "Advanced Topological Sort",
          url: "https://youtu.be/example16",
          duration: "31:15",
          platform: "YouTube"
        },
        {
          title: "Cycle Detection in DAG",
          url: "https://youtu.be/example17",
          duration: "24:45",
          platform: "YouTube"
        }
      ],
      articles: [
        {
          title: "Understanding Topological Sort",
          url: "https://medium.com/example-topo",
          author: "Alice Chen",
          platform: "Medium"
        },
        {
          title: "Mastering Topological Sort",
          url: "https://medium.com/example15",
          author: "Brian Wilson",
          platform: "Medium"
        },
        {
          title: "Graph Dependencies",
          url: "https://dev.to/example16",
          author: "Sophie Taylor",
          platform: "Dev.to"
        },
        {
          title: "Topological Sort in System Design",
          url: "https://medium.com/example17",
          author: "Alex Thompson",
          platform: "Medium"
        }
      ],
      visualizations: [
        {
          title: "Topological Sort Visualizer",
          url: "https://visualgo.net/example-topo",
          description: "Interactive visualization of topological sorting algorithm"
        },
        {
          title: "Interactive DAG Sorting",
          url: "https://algorithm-visualizer.org/example15",
          description: "Step by step visualization of DAG sorting"
        },
        {
          title: "Dependency Resolution",
          url: "https://www.cs.usfca.edu/~galles/visualization/example16",
          description: "Visual guide to dependency resolution"
        },
        {
          title: "Course Scheduling Visualizer",
          url: "https://visualgo.net/example17",
          description: "Interactive visualization of course scheduling"
        }
      ]
    }
  }
} as const; 