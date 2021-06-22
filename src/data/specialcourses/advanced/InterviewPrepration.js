export const interviewPrep = {
  courseid: '',
  discount: '90% Scholarship',
  difficulty: 'Intermediate',
  duration: '40 Live Lectures',
  level: 'Level 1',
  link: '/interview-prep-using-java',
  domain: 'Problem Solving',
  title: 'Interview Prepration using Java',
  upcoming: 'July 17th',
  mentors: ['nityanand'],
  active: true,
  application: true,
  schedule: [
    {
      courseId: 'jsfs0121',
      dates: '17th July - 30th Sept',
      days: 'Mon, Tue, Thurs, Sat',
      timing: '09:00 PM - 10:30 PM (IST)',
      link: '',
      priceCut: '₹ 18,850',
      price: '₹ 1,885',
      duration: '40 Live Lectures',
      active: true,
      application: true
    }
  ],
  projects: [
    {
      title: 'Automatic Sudoku Solver',
      img: '/static/images/courses/projects/sudoku.jpg'
    },
    {
      title: 'File Encryption and Compression',
      img: '/static/images/courses/projects/security.jpg'
    },
    {
      title: 'Splitwise Cashflow Minimization',
      img: '/static/images/courses/projects/split.png'
    },
    {
      title: 'Search routes like Google Maps',
      img: '/static/images/courses/projects/maps.png'
    },
    {
      title: 'Git Version Control Replica',
      img: '/static/images/courses/projects/git.png'
    }
  ],

  sections: [
    {
      title: 'Data Structure & Algorithms',
      classes: 'Classes 01-10',
      topics: [
        {
          title: 'Understanding online platforms: Codeforces & Leetcode',
          classes: 'Lectures 3',
          subtopics: [
            'Start Competitive Programming on Codeforces',
            'Set up IntelliJ idea for Competitive Coding',
            'Create Template to save time in Competitive Coding'
          ]
        },
        {
          title: 'Stacks & Queues',
          subtopics: [
            'Stack as generic collection',
            'Operations in Stack',
            'Stack using Array & LinkedList',
            'Push efficient & Pop efficient Stacks',
            'Queue as generic collection',
            'Operations in Queue',
            'Interview problems on Stack & Queue'
          ]
        },
        {
          title: 'LinkedList',
          subtopics: [
            'Intro to LinkedList',
            'Implementation of LinkedList',
            'Operations in LinkedList',
            'Cycle detection Algorithms',
            'Problems based on LinkedList'
          ]
        },
        {
          title: 'Binary Trees',
          subtopics: [
            'Implementation of Binary Trees',
            'Tree traversal- inorder, preorder, postorder',
            'Searching Algorithms- DFS and BFS',
            'Calculate- hieght, depth, diameter of tree',
            'Implementation of Binary Search Tree',
            'AVL Trees & Rotations',
            'Interview problems on BT & BST'
          ]
        },
        {
          title: 'Heap & HashMap',
          subtopics: [
            'Implementation of Heaps',
            'PriorityQueue as generic collection',
            'HeapSort with complexity analysis',
            'Concept of Hashing',
            'HashMap implementation using ArrayList & LinkedList',
            'Types of Maps in Java collections',
            'Problems on Hashmap & Heaps'
          ]
        }
      ]
    },
    {
      title: 'Advance Competetive Algorithms',
      classes: 'Classes 11-25',
      topics: [
        {
          title: 'Revisiting Java Collection Framework',
          classes: 'Lectures 1-2',
          subtopics: [
            'In-built Data Structures',
            'Classes, Interfaces and Inheritance',
            'Best practices with Generics and Collections',
            'lurking over recursion problems'
          ]
        },
        {
          title: 'Bit Masking and Manipulation',
          classes: 'Lectures 4-5',
          subtopics: [
            'Get, Set, Clear and Update bits',
            'Fast Exponentiation using Bitmasking',
            'Generate Subsets using Bitmasking',
            'Decimal to Binary using Bitwise',
            'Inclusion Exclusion Concept + Implementation'
          ]
        },
        {
          title: 'Divide & Conquer Algorithms',
          classes: 'Lectures 8',
          subtopics: [
            'Randomized Binary Search',
            'Merge sort & Quick sort',
            'Second largest element',
            'Painter partition problem',
          ]
        },
        {
          title: 'Recursion & Backtracking',
          classes: 'Lectures 10-12',
          subtopics: [
            'Recursive tree, Stack trace',
            'Generate all passwords from given character set',
            'Its confidential problem',
            'Sudoku solver',
            'Optimal BST problem',
            'Lexical permutation',
            'N-Queens & N-Knights'
          ]
        },
        {
          title: 'Dynamic Programming',
          classes: 'Lectures 13-15',
          subtopics: [
            'Understanding the concept in Dynamic Programming',
            'Understanding overlapping subproblems',
            'Memoization vs Tabulation',
            'Top down & bottom-up approach',
            '0-1 KnapSack problem',
            'Wildcard pattern problem',
            'Egg drop problem',
            'Matrix chain multiplication',
          ]
        },
        {
          title: 'Greedy Algorithms',
          classes: 'Lectures 16-17',
          subtopics: [
            'Greedy Algorithm concept &  philosphy',
            'Pirates & Gold coins problem',
            'Activity selection & Job sequencing problem',
            'Assign mice to holes',
            'Minimum Spanning Tree',
            'Memory Management Algorithms'
          ]
        }
      ]
    },
    {
      title: 'Advanced non-linear data structures',
      classes: 'Classes 26-40',
      topics: [
        {
          title: 'String Matching',
          classes: 'Lectures 19-20',
          subtopics: [
            'String Matching Algorithms',
            'String window problems',
            'String Hashing',
            'Rabin Karp Algorithm',
            'Knuth Morris Pratt Algorithm'
          ]
        },
        {
          title: 'Tries',
          classes: 'Lectures 21-22',
          subtopics: [
            'Trie as a Data Structure',
            'Implementation',
            'Max XOR pair',
            'Library Bookmarks',
            'Range XOR',
            'Trie Interview problem'
          ]
        },
        {
          title: 'Segment Tree',
          classes: 'Lectures 22-23',
          subtopics: [
            'Segment Tree: structure & concepts',
            'Build & update implementation',
            'Lazy Propagation',
            'Persistent Segment Tree',
            'XOR Sum problem',
            'Xenia & Bit operations[Codeforces]',
            'Alpha & his arrays',
            'Greatest common divisor',
            'Distinct Integers in range'
          ]
        },
        {
          title: 'Graphs',
          classes: 'Lectures 26-27',
          subtopics: [
            'Terminologies in Graph',
            'EdgeList implementation',
            'AdjacencyList implementation',
            'AdjacencyMap implementation',
            'Searching Algorithms- DFS and BFS',
            'Connected component, Cycle detection',
            'Bipartite Graph',
            "Kruskal's, Dijkstra's, Prim's Algorithms",
          ]
        },
        {
          title: 'Game Theory',
          classes: 'Lectures 30',
          subtopics: [
            'Concept around Game theory',
            'Combinational Game theory',
            'Game of chocolates',
            'Robot problems'
          ]
        }
      ]
    }
  ],
  slides: [
    {
      heading: '',
      subheading: '',
      image: '/static/swipes/web.png'
    }
  ],
  tags: [
    'Stack',
    'Queue',
    'Linked List',
    'Backtracking',
    'Dynamic Programming',
    'Tree',
    'Graph',
    'Bitwise',
    'Number Theory',
    'Segment Tree',
    'Decompositions'
  ],
  overview: [
    'During the course, you’ll learn everything needed to participate in real competitions — that’s the main goal. Along the way you’ll also gain useful skills for which competitive programmers are so highly valued by employers: ability to write efficient, reliable, and compact code, manage your time well when it’s limited, apply basic algorithmic ideas to real problems, etc.',
    'We start from the very beginning by teaching you what competitions there are, what are their rules, what specifics problems have, how to read problem statements, how to organize your work, and what you should and shouldn’t do. So it’s fine if you’ve never taken part in programming competitions before.'
  ],
  faqs: [
    {
      title: 'Will this help me with my career path?',
      answer:
        'Yes. If you learn well, all that the course intends to teach, you’ll be able to impress quite a few interviewers across quite a few fine companies.'
    },
    {
      title: 'How your doubts will get resolved?',
      answer:
        'We have an army of TA’s who are available in different time slots to resolve all your doubts. You can also interact with faculty through Slack.'
    },
    {
      title: 'Is this course suitable for me?',
      answer:
        'Definitely! If you want to shift to software developer career path, then this course is perfect for you!'
    }
  ]
};
