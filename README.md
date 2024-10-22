# YAll
An implementation of (yet another) linked list.

## Table Of Contents
* [General Info](#general-info)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)

## General Info
I wrote this as part of working through implementing data structures.

## Technologies Used
I'm only using plain, vanilla Typescript with no libraries or other packages.

## Features
* Get the *size* of the List.
* Similarly, determine whether the List *is_empty*.
* Retrieve an *item* from the *front* the List.
* Retrieve an *item* from the *back* the List.
* Retrieve and Remove an *item* from the *front* the List.
* Retrieve and Remove an *item* from the *back* the List.
* Get a particular *item* *at* a specific *index* of the List.
* Get a particular *item* *at* a specific *index* from the end of the List.
* Add an *item* to the *front* of the List.
* Add an *item* to the *back* of the List.
* *Insert* an *item* at a specified *index* to the List.
* *Erase* an *item* from the a specified *index* of the List.
* *Remove* a specified *item* from the List.
* *Reverse* the order of the List.
* Find the *index* of an *item* in the List.
* Get a listing of the *item*s contained in the List using an overloaded *toString* method.

## Setup
Just import the YAll class into your project.
## Usage
First, we must instantiate a List, here, as a list of numbers.
```
    const yall: YAll<number> = new YAll<number>();
```
We can add *item*s to the List. Below, we add an *item* to the beginning of the list.
```
    yall.push_front(1);
```
And, we can add a number to the end of the list.
```
    yall.push_back(2);
```
We can retrieve the *item*s in the list to take a look at the lists contents.
```
    yall.front();
```
In the above example, we get the value of the *item* at the beginning of the list. Here, the value is *1*. We can also find the value of the *item* at the end of the list.
```
    yall.back();
```
Similarly, we can retrieve the *front* and *back* *item*s but also remove those *item*s as well. In this example, we get the value of *2*. So, now, in the list, we have *[1, 2]*, which we can obtain by calling the overloaded the *toString* method.
```
    yall.pop_front();
```
For the example above, we retrieve the *front* *item* contained in the list. We get the value *1* returned from the method call. The list as returned by a call of the *toString* call is now *[2]*.
```
    yall.pop_back();
```
For the example above, we retrieve the *back* *item* contained in the list. We get the value *2* returned from the method call. The list as returned by a call of the *toString* call is now *[]*, which indicates an empty list. A call to the *is_empty* method would return a value of true in this instance.

Now, if we add values, again, to the list as they were before, we'd have a list represented by *[1,2]*. We can, then, *insert* a value at any *index* in the list.
```
    yall.insert(3, 1);
```
Now, we have *insert*ed the value *3* into the *1*st position of the list. So, the list can be represented as *[1, 3, 2]*. We can retrieve the value at a specified *index*.
```
    yall.value_at(0);
```
Calling the *value_at* method, in the above example, is equivalent to the example above with the call to the *front* method. The return value is *1*. Next, we can retrieve the value contained at a specific *index* from the end of the list.
``` 
    yall.value_n_from_end(0);
```
Similar to the above example, we retrieve the value at the end of the list. As with the call above to the *back* method, we obtain the value *2*.

We can also obtain the *index* where a specific *item* is contained in the list.
```
    yall.idx_at(3);
```
In the above example, we retrieve the middle *index* where the value of the *item* *3* is contained, *1*.

An important operation that we may need to perform on a list from time to time is to *reverse* the list.
```
    yall.reverse();
```
Now, we have *reverse*d the list, so that each *item* in the list is now in an order opposite to where it was located before. So, the list can be represented as *[2, 3, 1]*. 

If we revert to the list as it was before we *reverse*d it, we have the list as *[1, 3, 2]*, once again. We can delete *item*s from the list.
```
    yall.erase(0);
```
We have, in the above example, *erase*d the value contained at the *0*th position in the list. Now, the list can be represented as *[3, 2]*. Next, we can *remove* a specified *value*.
```
    yall.remove_value(2);
```
Now, we have *remove*d the value *2* from the list, which can be represented as *[3]*.
## Project Status
As this code is intended to be a part of a project in itself, this project is still in progress and will be until that project is completed. 

## Room for Improvement
The areas where there may be some room for improvement are those where some properties may be better suited to be public and thereby a couple functions should be removed.

## Contact
Feel free to contact me @michaelrjamesjr on twitter.
