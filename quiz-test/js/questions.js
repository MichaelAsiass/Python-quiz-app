let questions = [
  {
    numb: 1,
    question:
      "Given a list numbers = [1, 2, 3, 4, 5], what will sum(numbers) return?",
    answer: "15",
    options: ["15", "5", "[1, 2, 3, 4, 5]", "TypeError"],
  },
  {
    numb: 2,
    question: "How do you remove an element from a set in Python?",
    answer: "All of the above",
    options: [
      "Using the remove() method",
      "Using the discard() method",
      "Using the pop() method",
      "All of the above",
    ],
  },
  {
    numb: 3,
    question:
      "Which of the following is the correct way to import the math module in Python?",
    answer: "import math",
    options: [
      "import math",
      "from math import *",
      "from math import math",
      "from math import sqrt, sin",
    ],
  },
  {
    numb: 4,
    question: "Which of the following is used to read a CSV file in Python?",
    answer: "csv.reader()",
    options: ["csv.load()", "csv.open()", "csv.reader()", "csv.read()"],
  },
  {
    numb: 5,
    question: "What does the __init__ method do in a Python class?",
    answer: "It initializes the object's attributes",
    options: [
      "It initializes the object's attributes",
      "It defines the class methods",
      "It is a destructor method",
      "It is a static method",
    ],
  },
  {
    numb: 6,
    question: "Which module in Python can be used for sending emails?",
    answer: "smtplib",
    options: ["email", "smtp", "smtplib", "poplib"],
  },
  {
    numb: 7,
    question: "What is the purpose of the pass statement in Python?",
    answer: "It is a placeholder statement that does nothing.",
    options: [
      "It is used to skip the current iteration in a loop.",
      "It is used to raise an exception.",
      "It is used to terminate the program.",
      "It is a placeholder statement that does nothing.",
    ],
  },
  {
    numb: 8,
    question:
      "What is the output of the following code snippet numbers = [1, 2, 3, 4, 5] squared = [x ** 2 for x in numbers if x % 2 == 0]print(squared)",
    answer: "[4, 16]",
    options: ["[1, 4, 9, 16, 25]", "[4, 16]", "[2, 4]", "[16]"],
  },
  {
    numb: 9,
    question: "What is the output of the following code? print('Hello'[::-1])",
    answer: "olleH",
    options: ["Hello", "hello", "olleH", "Hello olleH"],
  },
  {
    numb: 10,
    question: "Which of the following is not a valid Python data type?",
    answer: "char",
    options: ["int", "char", "float", "str"],
  },
  {
    numb: 11,
    question: "How do you comment out a single line in Python?",
    answer: "# This is a comment ",
    options: [
      "// This is a comment",
      "# This is a comment ",
      "/* This is a comment */",
      "' This is a comment",
    ],
  },
  {
    numb: 12,
    question:
      "Which of the following is not a valid Python comparison operator?",
    answer: "!==",
    options: ["==", "<=", ">=", "!=="],
  },
  {
    numb: 13,
    question: "What is the result of the expression 3 ** 2?",
    answer: "B",
    options: ["6", "9", "11", "12"],
  },
  {
    numb: 14,
    question:
      "Which of the following is not a valid Python comparison operator?",
    answer: "C",
    options: ["==", "<=", "><", "!="],
  },
  {
    numb: 20,
    question: "What is the result of the expression 10 / 3 in Python?",
    answer: "3.3333333333333335",
    options: ["3", "3.0", "3.33", "3.3333333333333335"],
  },
  {
    numb: 21,
    question: "What is the result of the expression 'Hello' + 'World'?",
    answer: "HelloWorld",
    options: ["Hello World", "Hello+World", "Hello", "HelloWorld"],
  },
  {
    numb: 22,
    question: "What does the 'len()' function return for an empty list?",
    answer: "0",
    options: ["1", "0", "None", "-1"],
  },
  {
    numb: 23,
    question:
      "What is the output of the following code?\nprint('Python ' + 'Quiz')",
    answer: "Python Quiz",
    options: ["PythonQuiz", "Python Quiz", "PythonQuiz ", "Quiz Python"],
  },
  {
    numb: 24,
    question: "What is the purpose of the '__init__' method in a Python class?",
    answer: "It is called when an object is created from the class.",
    options: [
      "It is a destructor method.",
      "It is called when an object is created from the class.",
      "It is used to delete an object.",
      "It is used to initialize class variables.",
    ],
  },
  {
    numb: 25,
    question: "In Python, what does the 'super()' function do in a subclass?",
    answer: "It calls the constructor of the superclass.",
    options: [
      "It calls the constructor of the superclass.",
      "It generates random numbers.",
      "It removes the superclass inheritance.",
      "It calls a method from the superclass.",
    ],
  },
  {
    numb: 26,
    question:
      "Which of the following modules is used for regular expressions in Python?",
    answer: "re",
    options: ["re", "regex", "regex.py", "regexp"],
  },
  {
    numb: 27,
    question:
      "What does the 'with' statement do in Python when working with files?",
    answer: "It ensures that files are properly closed after they are used.",
    options: [
      "It opens a file for writing.",
      "It defines a custom file object.",
      "It ensures that files are properly closed after they are used.",
      "It creates a backup of the file.",
    ],
  },
  {
    numb: 28,
    question:
      "What is the purpose of the 'sys.argv' list in Python's 'sys' module?",
    answer: "It stores the command-line arguments passed to a Python script.",
    options: [
      "It contains a list of all installed Python modules.",
      "It stores the command-line arguments passed to a Python script.",
      "It holds system-wide configuration settings.",
      "It is used to write to the standard output.",
    ],
  },
  {
    numb: 29,
    question: "What is the purpose of the 'zip()' function in Python?",
    answer: "To combine two or more iterable objects into a single iterator.",
    options: [
      "To unzip a file.",
      "To compress a folder.",
      "To combine two or more iterable objects into a single iterator.",
      "To sort a list in descending order.",
    ],
  },
  {
    numb: 30,
    question: "How do you open a file in binary mode in Python?",
    answer: "By adding 'b' to the file mode, e.g., 'rb' for reading binary.",
    options: [
      "By using 'bin' keyword in the open() function.",
      "By setting the file mode to 'binary'.",
      "By adding 'b' to the file mode, e.g., 'rb' for reading binary.",
      "By opening the file normally; Python handles binary mode automatically.",
    ],
  },
  {
    numb: 31,
    question: "Which built-in function is used to sort a list in Python?",
    answer: "sorted()",
    options: ["sort()", "sorted()", "order()", "arrange()"],
  },
  {
    numb: 32,
    question: "What is the purpose of the 'repr()' function in Python?",
    answer: "To obtain the official string representation of an object.",
    options: [
      "To represent integers only.",
      "To convert a string to an integer.",
      "To obtain the official string representation of an object.",
      "To reverse a string.",
    ],
  },
  {
    numb: 33,
    question: "What is the result of 'True and False' in Python?",
    answer: "False",
    options: ["True", "False", "None", "Error"],
  },
  {
    numb: 34,
    question:
      "What is the default scope of a Python variable if not specified?",
    answer: "Local",
    options: ["Local", "Global", "Enclosing", "Built-in"],
  },
  {
    numb: 35,
    question: "What is the output of '2 * 3 ** 2' in Python?",
    answer: "18",
    options: ["6", "18", "24", "27"],
  },
  {
    numb: 36,
    question: "What is the purpose of the 'pass' statement in Python?",
    answer: "It is a placeholder statement that does nothing.",
    options: [
      "It is used to skip the current iteration in a loop.",
      "It is used to raise an exception.",
      "It is used to terminate the program.",
      "It is a placeholder statement that does nothing.",
    ],
  },
  {
    numb: 37,
    question: "What is the purpose of the 'pop()' method in Python?",
    answer: "To remove and return an item from a list by its index.",
    options: [
      "To add an item to a list.",
      "To remove all items from a list.",
      "To remove and return an item from a list by its index.",
      "To append an item to the end of a list.",
    ],
  },
  {
    numb: 38,
    question: "Which of the following is not a valid Python built-in function?",
    answer: "print()",
    options: ["len()", "range()", "print()", "abs()"],
  },
  {
    numb: 39,
    question: "What is the output of '3 in [1, 2, 3, 4, 5]' in Python?",
    answer: "True",
    options: ["True", "False", "Error", "None"],
  },
  {
    numb: 40,
    question: "What is the result of 'max([5, 2, 9, 7, 1])' in Python?",
    answer: "9",
    options: ["5", "2", "9", "7"],
  },
  {
    numb: 41,
    question: "In Python, what does the 'not' operator do?",
    answer: "Negates the boolean value of an expression.",
    options: [
      "Converts a number to a boolean value.",
      "Reverses the order of a list.",
      "Negates the boolean value of an expression.",
      "Performs logical addition.",
    ],
  },
  {
    numb: 42,
    question: "What is the result of 'str(123)' in Python?",
    answer: "123",
    options: ["123", "'123'", "str", "Error"],
  },
  {
    numb: 43,
    question:
      "How do you round a floating-point number to the nearest integer in Python?",
    answer: "Using the 'round()' function.",
    options: [
      "By multiplying it by 1.0.",
      "Using the 'ceil()' function.",
      "Using the 'floor()' function.",
      "Using the 'round()' function.",
    ],
  },
  {
    numb: 44,
    question: "What is the output of 'ord('A')' in Python?",
    answer: "65",
    options: ["65", "97", "A", "1"],
  },
  {
    numb: 45,
    question: "What is the purpose of the 'zip()' function in Python?",
    answer: "To combine two or more iterable objects into a single iterator.",
    options: [
      "To unzip a file.",
      "To compress a folder.",
      "To combine two or more iterable objects into a single iterator.",
      "To sort a list in descending order.",
    ],
  },
  {
    numb: 46,
    question: "What is the output of 'len('Python')' in Python?",
    answer: "6",
    options: ["5", "6", "7", "8"],
  },
  {
    numb: 47,
    question: "What is the purpose of the 'split()' method in Python?",
    answer:
      "To split a string into a list of substrings using a specified delimiter.",
    options: [
      "To join two strings together.",
      "To reverse the characters in a string.",
      "To split a string into a list of substrings using a specified delimiter.",
      "To find and replace a substring in a string.",
    ],
  },
  {
    numb: 48,
    question:
      "Which built-in function is used to convert an integer to a string in Python?",
    answer: "str()",
    options: ["int()", "float()", "str()", "bool()"],
  },
  {
    numb: 49,
    question: "What is the result of '5 == '5' in Python?",
    answer: "False",
    options: ["True", "False", "Error", "None"],
  },
  {
    numb: 50,
    question: "What is the purpose of the 'is' operator in Python?",
    answer: "To check if two objects are the same object in memory.",
    options: [
      "To compare two strings for equality.",
      "To check if two objects have the same attributes.",
      "To check if two objects are the same object in memory.",
      "To create a new object with the same values.",
    ],
  },
  {
    numb: 51,
    question: "What is the output of 'chr(65)' in Python?",
    answer: "A",
    options: ["65", "97", "A", "1"],
  },
  {
    numb: 52,
    question:
      "Which data type is used to store a sequence of characters in Python?",
    answer: "String",
    options: ["Integer", "Float", "List", "String"],
  },
  {
    numb: 53,
    question:
      "What is the purpose of the 'continue' statement in a loop in Python?",
    answer: "It skips the current iteration and continues to the next one.",
    options: [
      "It terminates the loop.",
      "It restarts the loop from the beginning.",
      "It skips the current iteration and continues to the next one.",
      "It prints a message and continues the loop.",
    ],
  },
  {
    numb: 54,
    question: "What is the result of '10 % 3' in Python?",
    answer: "1",
    options: ["3", "1", "2", "0"],
  },
  {
    numb: 55,
    question: "What is the purpose of the 'len()' function in Python?",
    answer: "It returns the length of an iterable object.",
    options: [
      "It returns the length of a string only.",
      "It returns the length of a list only.",
      "It returns the length of an iterable object.",
      "It returns the number of characters in a string.",
    ],
  },
  {
    numb: 56,
    question: "What is the result of 'abs(-5)' in Python?",
    answer: "5",
    options: ["-5", "0", "5", "Error"],
  },
  {
    numb: 57,
    question: "What is the output of 'bool([])' in Python?",
    answer: "False",
    options: ["True", "False", "Error", "None"],
  },
  {
    numb: 58,
    question: "What is the purpose of the 'join()' method in Python?",
    answer:
      "To concatenate a list of strings into a single string using a specified separator.",
    options: [
      "To split a string into multiple substrings.",
      "To remove characters from a string.",
      "To calculate the sum of numbers in a list.",
      "To concatenate a list of strings into a single string using a specified separator.",
    ],
  },
  {
    numb: 59,
    question: "What is the result of '5 // 2' in Python?",
    answer: "2",
    options: ["2", "2.5", "3", "0.4"],
  },
  {
    numb: 60,
    question: "Which keyword is used to define a function in Python?",
    answer: "def",
    options: ["function", "define", "func", "def"],
  },
  {
    numb: 61,
    question: "What is the result of '10 > 5 and 5 < 2' in Python?",
    answer: "False",
    options: ["True", "False", "Error", "None"],
  },
  {
    numb: 62,
    question: "In Python, how can you comment out multiple lines of code?",
    answer: "Using triple-quoted strings (''' or \"\"\").",
    options: [
      "By prefixing each line with the '#' symbol.",
      "Using triple-quoted strings (''' or \"\"\").",
      "By enclosing the code in parentheses.",
      "By adding '/*' and '*/' before and after the code.",
    ],
  },
  {
    numb: 63,
    question:
      "What does the 'repr()' function return for an integer in Python?",
    answer: "A string with quotes (e.g., '5').",
    options: [
      "An integer value",
      "A floating-point number",
      "A string without quotes (e.g., 5)",
      "A string with quotes (e.g., '5')",
    ],
  },
  {
    numb: 64,
    question:
      "Which operator is used to check if an element is present in a list in Python?",
    answer: "in",
    options: ["exists", "present", "in", "has"],
  },
  {
    numb: 65,
    question: "What is the purpose of the 'range()' function in Python?",
    answer: "To generate a sequence of numbers within a specified range.",
    options: [
      "To calculate the sum of a list of numbers.",
      "To count the number of elements in a list.",
      "To reverse a string.",
      "To generate a sequence of numbers within a specified range.",
    ],
  },
  {
    numb: 66,
    question: "What is the purpose of the 'map()' function in Python?",
    answer:
      "To apply a given function to each item of an iterable and return a map object.",
    options: [
      "To create a dictionary from an iterable.",
      "To sort an iterable in ascending order.",
      "To apply a given function to each item of an iterable and return a map object.",
      "To filter out items from an iterable.",
    ],
  },
  {
    numb: 67,
    question: "What is the result of 'list('hello')' in Python?",
    answer: "['h', 'e', 'l', 'l', 'o']",
    options: [
      "hello",
      "['h', 'e', 'l', 'l', 'o']",
      "['hello']",
      "['h', 'e', 'l', 'l', 'o']",
    ],
  },
  {
    numb: 68,
    question: "What is the output of 'sorted('python')' in Python?",
    answer: "['h', 'n', 'o', 'p', 't', 'y']",
    options: [
      "['p', 'y', 't', 'h', 'o', 'n']",
      "['h', 'n', 'o', 'p', 't', 'y']",
      "TypeError",
      "None",
    ],
  },
  {
    numb: 69,
    question: "What is the purpose of the 'strip()' method in Python?",
    answer:
      "To remove leading and trailing whitespace characters from a string.",
    options: [
      "To add spaces to the beginning of a string.",
      "To capitalize the first letter of a string.",
      "To split a string into multiple substrings.",
      "To remove leading and trailing whitespace characters from a string.",
    ],
  },
  {
    numb: 70,
    question: "What is the result of 'list(range(5))' in Python?",
    answer: "[0, 1, 2, 3, 4]",
    options: [
      "[1, 2, 3, 4, 5]",
      "[0, 1, 2, 3, 4]",
      "[5, 4, 3, 2, 1, 0]",
      "[0, 5, 10, 15, 20]",
    ],
  },
  {
    numb: 71,
    question: "What is the purpose of the 'extend()' method in Python lists?",
    answer: "To append elements from an iterable to the end of the list.",
    options: [
      "To create a new list with elements from two other lists.",
      "To reverse the order of elements in the list.",
      "To insert an element at a specific index in the list.",
      "To append elements from an iterable to the end of the list.",
    ],
  },
  {
    numb: 72,
    question: "What is the output of 'int(3.14)' in Python?",
    answer: "3",
    options: ["3", "3.14", "4", "Error"],
  },
  {
    numb: 73,
    question: "What is the result of 'list('Python')' in Python?",
    answer: "['P', 'y', 't', 'h', 'o', 'n']",
    options: [
      "Python",
      "['P', 'y', 't', 'h', 'o', 'n']",
      "['Python']",
      "['p', 'y', 't', 'h', 'o', 'n']",
    ],
  },
  {
    numb: 74,
    question: "What is the purpose of the 'count()' method in Python lists?",
    answer:
      "To count the number of occurrences of a specific element in the list.",
    options: [
      "To find the index of the first occurrence of an element in the list.",
      "To create a new list with unique elements from the original list.",
      "To remove an element from the list.",
      "To count the number of occurrences of a specific element in the list.",
    ],
  },
  {
    numb: 75,
    question: "What is the output of 'tuple([1, 2, 3])' in Python?",
    answer: "(1, 2, 3)",
    options: ["tuple([1, 2, 3])", "[1, 2, 3]", "(1, 2, 3)", "1, 2, 3"],
  },
  {
    numb: 76,
    question: "What is the purpose of the 'del' statement in Python?",
    answer: "To remove an item or a slice from a list or a dictionary.",
    options: [
      "To create a new variable.",
      "To add an item to a list.",
      "To print a value to the console.",
      "To remove an item or a slice from a list or a dictionary.",
    ],
  },
  {
    numb: 77,
    question: "What is the result of 'min([5, 2, 9, 7, 1])' in Python?",
    answer: "1",
    options: ["5", "2", "9", "1"],
  },
  {
    numb: 78,
    question: "In Python, how do you import a module with an alias?",
    answer: "import module_name as alias",
    options: [
      "import module_name as alias",
      "import module_name",
      "import alias as module_name",
      "from module_name import alias",
    ],
  },
  {
    numb: 79,
    question: "What is the result of 'bool(0)' in Python?",
    answer: "False",
    options: ["True", "False", "Error", "None"],
  },
  {
    numb: 80,
    question: "What is the purpose of the 'enumerate()' function in Python?",
    answer: "To iterate over elements and their indices in an iterable.",
    options: [
      "To calculate the sum of elements in an iterable.",
      "To reverse the order of elements in an iterable.",
      "To remove elements from an iterable.",
      "To iterate over elements and their indices in an iterable.",
    ],
  },
  {
    numb: 81,
    question: "What is the output of 'bool('Hello World')' in Python?",
    answer: "True",
    options: ["True", "False", "Error", "None"],
  },
  {
    numb: 82,
    question: "What is the result of '3 + 5.0' in Python?",
    answer: "8.0",
    options: ["8", "8.0", "53", "Error"],
  },
  {
    numb: 83,
    question: "What is the purpose of the 'global' keyword in Python?",
    answer: "To declare a global variable within a function.",
    options: [
      "To restrict access to a variable within a function.",
      "To declare a function.",
      "To create a new module.",
      "To declare a global variable within a function.",
    ],
  },
  {
    numb: 84,
    question: "What is the output of 'print('Hello', 'World')' in Python?",
    answer: "Hello World",
    options: ["HelloWorld", "Hello World", "World", "print('Hello', 'World')"],
  },
  {
    numb: 85,
    question: "What is the purpose of the 'round()' function in Python?",
    answer: "To round a floating-point number to the nearest integer.",
    options: [
      "To remove decimal places from a number.",
      "To convert a string to an integer.",
      "To round a floating-point number to the nearest integer.",
      "To calculate the square root of a number.",
    ],
  },
  {
    numb: 86,
    question: "What is the result of 'bool(0.0)' in Python?",
    answer: "False",
    options: ["True", "False", "Error", "None"],
  },
  {
    numb: 87,
    question: "What is the purpose of the 'abs()' function in Python?",
    answer: "To return the absolute value of a number.",
    options: [
      "To calculate the sum of a list of numbers.",
      "To remove elements from a list.",
      "To return the absolute value of a number.",
      "To convert a string to an integer.",
    ],
  },
  {
    numb: 88,
    question: "What is the result of 'bool([])' in Python?",
    answer: "False",
    options: ["True", "False", "Error", "None"],
  },
  {
    numb: 89,
    question: "What is the output of 'float(42)' in Python?",
    answer: "42.0",
    options: ["42", "42.0", "4.2", "Error"],
  },
  {
    numb: 90,
    question: "What is the purpose of the 'isinstance()' function in Python?",
    answer: "To check if an object is an instance of a specified class.",
    options: [
      "To convert a string to an integer.",
      "To check if two objects are identical.",
      "To check if an object is an instance of a specified class.",
      "To compare two strings for equality.",
    ],
  },
  {
    numb: 91,
    question: "What is the output of 'max(5, 3, 8, 1)' in Python?",
    answer: "8",
    options: ["5", "3", "8", "1"],
  },
  {
    numb: 92,
    question: "What is the purpose of the 'append()' method in Python lists?",
    answer: "To add an element to the end of a list.",
    options: [
      "To remove an element from a list.",
      "To create a new list with elements from two other lists.",
      "To add an element to the end of a list.",
      "To sort a list in ascending order.",
    ],
  },
  {
    numb: 93,
    question: "What is the result of 'not True' in Python?",
    answer: "False",
    options: ["True", "False", "Error", "None"],
  },
  {
    numb: 94,
    question: "What is the purpose of the 'zip()' function in Python?",
    answer: "To combine two or more iterable objects into a single iterator.",
    options: [
      "To unzip a file.",
      "To sort a list in descending order.",
      "To combine two or more iterable objects into a single iterator.",
      "To generate random numbers.",
    ],
  },
  {
    numb: 95,
    question: "What is the output of 'list(range(1, 6, 2))' in Python?",
    answer: "[1, 3, 5]",
    options: ["[1, 2, 3, 4, 5]", "[1, 3, 5]", "[2, 4, 6]", "[1, 4, 5]"],
  },
  {
    numb: 96,
    question: "What is the purpose of the 'filter()' function in Python?",
    answer:
      "To filter elements from an iterable based on a specified function.",
    options: [
      "To sort elements in an iterable.",
      "To calculate the sum of elements in an iterable.",
      "To convert an iterable to a list.",
      "To filter elements from an iterable based on a specified function.",
    ],
  },
  {
    numb: 97,
    question: "What is the result of '5 % 2' in Python?",
    answer: "1",
    options: ["2", "1", "2.5", "0.5"],
  },
  {
    numb: 98,
    question: "What is the purpose of the 'chr()' function in Python?",
    answer: "To return the character represented by a Unicode code point.",
    options: [
      "To calculate the sum of characters in a string.",
      "To reverse the order of characters in a string.",
      "To return the character represented by a Unicode code point.",
      "To convert a string to lowercase.",
    ],
  },
  {
    numb: 99,
    question: "What is the output of 'bool('0')' in Python?",
    answer: "True",
    options: ["True", "False", "Error", "None"],
  },
  {
    numb: 100,
    question: "What is the purpose of the 'round()' function in Python?",
    answer:
      "To round a floating-point number to a specified number of decimal places.",
    options: [
      "To remove decimal places from a number.",
      "To convert a string to an integer.",
      "To round a floating-point number to the nearest integer.",
      "To round a floating-point number to a specified number of decimal places.",
    ],
  },
];
