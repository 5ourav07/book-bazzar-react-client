import React from 'react';

const Blogs = () => {
    return (
        <div className='w-3/4 mx-auto my-5'>
            <div className="bg-white border border-black rounded-lg my-5">
                <h2 className="w-full pt-4 px-5">
                    <b>What are the different ways to manage a state in a React application?</b>
                </h2>
                <p className="py-4 px-5">
                    Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components.The built-in way that React provides for setting component states is by using setState() and adding “local state” to a class. There are several other ways to manage state​s in React, including the use of: Hooks, React Context API, Apollo Link State.
                </p>
            </div>
            <div className="bg-white border border-black rounded-lg my-5">
                <h2 className="w-full pt-4 px-5">
                    <b>How does prototypical inheritance work?</b>
                </h2>
                <p className="py-4 px-5">
                    Prototype inheritance in javascript is the linking of prototypes of a parent object to a child object to share and utilize the properties of a parent class using a child class. Prototypes are hidden objects that are used to share the properties and methods of a parent class to child classes.
                </p>
            </div>
            <div className="bg-white border border-black rounded-lg my-5">
                <h2 className="w-full pt-4 px-5">
                    <b>What is a unit test? Why should we write unit tests?</b>
                </h2>
                <p className="py-4 px-5">
                    Unit tests generally exercise the functionality of the smallest possible unit of code (a method, class, or component) in a repeatable way. Although they can occasionally be complex (depending on the application), unit tests help you write better and cleaner code. Remember that a failing test is either doing its job correctly or poorly written in the first place.
                </p>
            </div>
            <div className="bg-white border border-black rounded-lg my-5">
                <h2 className="w-full pt-4 px-5">
                    <b>React vs. Angular vs. Vue?</b>
                </h2>
                <p className="py-4 px-5">
                    <b>Angular:</b> Angular is one of the mature frameworks, having good contributors and ensuring a complete package for app development. On the other side, it requires steep learning and creating watchers to view updates which may put off new app developers. All in all Angular is an ideal option for companies with the requirement for large scale apps.
                    <br /><br />
                    <b>React:</b> React is now half a decade old and has an outgrown community for support. It has gained worldwide acceptance and is a good choice for front-end development. It is ideal for startups looking to create SPAs.
                    <br /><br />
                    <b>Vue:</b> It is a young library without any backing from major companies but still considered as a strong competitor for Angular and React. Due to its flexibility and ease of use, it has become a choice of industry giants.
                </p>
            </div>
        </div >
    );
};

export default Blogs;