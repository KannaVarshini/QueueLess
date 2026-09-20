# QueueLess

## Know before you wait.

QueueLess is a smart queue estimation web application that helps people make better decisions about when to join a queue.

Instead of joining a long queue without knowing how long it may take, users can enter the number of people currently waiting and get an estimated waiting time based on historical service-time patterns.

## Live Demo

**AWS Amplify:**
https://production.d3ayqtub8quw40.amplifyapp.com/

## Problem

People regularly lose time waiting in queues at places such as:

* College canteens
* Administrative offices
* Clinics
* Libraries
* Campus facilities

In many cases, people have no simple way to estimate how long a queue will take before deciding to join it.

## Solution

QueueLess provides a simple waiting-time estimation workflow.

The user selects:

1. College
2. Campus location
3. Number of people currently waiting

QueueLess then estimates the waiting time using:

**Estimated wait time = People waiting × Historical average service time**

The application also classifies the queue and provides a recommendation such as whether it may be better to wait or return during a less busy period.

## Features

* Waiting-time estimation
* Multiple college options
* Multiple campus locations
* Queue status classification
* Personalized wait recommendation
* Historical queue-pattern insights
* Best-time-to-visit indication
* Responsive web interface
* Live deployment using AWS Amplify Hosting

## Current Data Model

The current MVP uses **sample historical service-time and queue-pattern data** to demonstrate the prediction workflow.

Example service-time values include:

| Location        | Sample historical service time |
| --------------- | -----------------------------: |
| College Canteen |                 2.0 min/person |
| College Office  |                                |
