# About Node - JavaScript Asynchronous Programming Lessons

Welcome to the "about-node" folder! This folder contains a series of JavaScript lessons focused on **asynchronous programming** in Node.js. These lessons are designed to help you understand how to work with asynchronous functions, especially using `setTimeout`, and how the JavaScript event loop handles concurrency.

## Lesson 1: **Basic Function Calls and Execution Flow**

In this lesson, you will explore how functions are executed in JavaScript, particularly the order in which they are called. You'll get hands-on experience with **nested function calls** and how JavaScript manages them. 

The example code demonstrates the following:
- Calling multiple functions sequentially.
- Understanding how functions are stacked in the call stack.
- Observing the order in which the functions' logs appear based on the call hierarchy.

### Key Concepts:
- **Call Stack:** The order in which functions are called.
- **Function Execution:** How each function completes its task.

## Lesson 2: **Working with setTimeout (Asynchronous Functions)**

This lesson introduces you to asynchronous programming in JavaScript using `setTimeout`. You'll learn how to delay function execution without blocking the rest of the program. This is a key concept when working with **non-blocking code**.

The example demonstrates:
- How `setTimeout` schedules code to be executed after a specified delay.
- How the JavaScript engine continues executing other code without waiting for the timeout to finish.

### Key Concepts:
- **setTimeout:** A function that sets a delay before executing code.
- **Asynchronous Execution:** How code continues executing without waiting for a delayed function to complete.
- **Event Loop:** How JavaScript handles asynchronous functions in an event-driven manner.

## Lesson 3: **Multiple setTimeout Calls**

In this lesson, you will extend your understanding of `setTimeout` by using **multiple timeouts**. You will learn how different delays affect the order in which messages are logged.

The example demonstrates:
- Setting multiple timeouts with different delays.
- Understanding the order in which messages are printed based on the delays.
- Exploring how asynchronous code behaves when multiple timeouts are set.

### Key Concepts:
- **Event Queue:** How the event loop manages delayed tasks.
- **Non-blocking Code:** How JavaScript handles multiple asynchronous tasks.

---

## Learning Outcomes

By the end of these lessons, you should be able to:
- Understand how JavaScript handles synchronous and asynchronous code.
- Use `setTimeout` to delay execution and create non-blocking programs.
- Comprehend how the event loop manages the execution of asynchronous code in a JavaScript runtime environment like Node.js.

---

## How to Use This Folder

1. Clone this repository or download the files to your local machine.
2. Open each JavaScript file to explore the examples.
3. Run each file with Node.js to observe the behavior of asynchronous code.
4. Refer to the comments in each file to guide your learning, which explain the order of execution and key concepts.

---

Happy learning and happy coding!

