import React from 'react';

const Blogs = () => {
    return (
        <div className='w-4/5 mx-auto my-20'>
            <div className="mb-8 card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="data:image/jpeg;base64,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" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">What are the different ways to manage a state in React application?</h2>
                    <p>There are four main types of state you need to properly manage in your React apps:
                        Local state,
                        Global state,
                        Server state,
                        URL state.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Done</button>
                    </div>
                </div>
            </div>
            <div className="mb-8 card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="https://www.educative.io/v2api/editorpage/6187859468877824/image/5404262147293184" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">how does prototypical inheritance work?</h2>
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Done</button>
                    </div>
                </div>
            </div>
            <div className="mb-8 card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="https://www.softwaretestinghelp.com/wp-content/qa/uploads/2012/11/Unit-Testing.png" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">What is a unit test? Why should we write unit tests?</h2>
                    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Done</button>
                    </div>
                </div>
            </div>
            <div className="mb-8 card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa8MnW6HqYmF3_QA0ioULeVrgB_0R90eThOo1agA9kWQ&s" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">React VS Angular VS Vue</h2>
                    <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Done</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;