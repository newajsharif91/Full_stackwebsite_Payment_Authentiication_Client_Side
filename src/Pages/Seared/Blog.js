import React from 'react';
 //Blog add
const Blog = () => {
    return (
        <div className='my-16 grid lg:grid-cols-1 gap-10'>


{/* Change the blogs answers and design */}


            {/* <div >
                <h2 className='text-2xl font-bold text-red-700'>1. What are the different ways to manage a state in a React application?</h2>
                <h2 className=''> <br /> <span className='font-bold'>&gt;&gt;&gt;&gt;&gt;</span> <br />
                    <span className='font-bold text-xl'>The Four Kinds of React State to Manage:</span><br />
                    <span className='text-xl'>There are four main types of state you need to properly manage in your React apps:</span><br /> <br />
                    <span className='text-xl'>1 Local state</span><br />
                    <span className='text-xl'>2 Global state </span><br />
                    <span className='text-xl'>3 Server state</span><br />
                    <span className='text-xl'>4 URL state</span><br /><br />
                    <span className='text-xl'>Let's cover each of these in detail:</span><br /> <br />

                    <span className='text-xl  font-bold'>Local (UI) state – Local state is data we manage in one or another component.</span><br />
                    <span className='text-xl'>Local state is most often managed in React using the useState hook.</span><br />
                    <span className='text-xl'>For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.</span><br /> <br />

                    <span className='text-xl  font-bold'>Global (UI) state – Global state is data we manage across multiple components.</span><br />
                    <span className='text-xl'>Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</span><br />
                    <span className='text-xl'>A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.Sometimes state we think should be local might become global.</span><br />
                    <span className='text-xl'>For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.</span><br /> <br />

                    <span className='text-xl  font-bold'>Server state – Data that comes from an external server that must be integrated with our UI state.</span><br />
                    <span className='text-xl'>Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.</span><br />
                    <span className='text-xl'>There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.Fortunately there are tools such as SWR and React Query that make managing server state much easier.</span><br />
                    <span className='text-xl'>For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.</span><br /> <br />

                    <span className='text-xl  font-bold'>URL state – Data that exists on our URLs, including the pathname and query parameters.</span><br />
                    <span className='text-xl'>URL state is often missing as a category of state, but it is an important one.
                        In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!</span><br />
                    <span className='text-xl'>There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</span><br />


                </h2>
            </div>



            <div >
                <h2 className='text-2xl font-bold text-red-700'>2. How does prototypical inheritance work?</h2>
                <h2 className=''> <br /> <span className='font-bold'>&gt;&gt;&gt;&gt;&gt;</span> <br />
                    <span className='text-xl'>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.</span><br /> <br />
                    <span className='text-xl'>Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).</span><br /> <br />

                    <span className='text-xl'>JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.</span><br /> <br />

                    <span className='text-xl'>Today, we want to get you acquainted with prototypal inheritance in JavaScript to get you up to date with the ES6 capabilities.</span>
                </h2>
            </div>


            <div >
                <h2 className='text-2xl font-bold text-red-700'>3. What is a unit test? Why should we write unit tests?</h2>
                <h2 className=''> <br /> <span className='font-bold'>&gt;&gt;&gt;&gt;&gt;</span> <br />
                    <span className='text-xl'>Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.</span><br /> <br />

                    <span className='text-xl'>Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end.
                    </span>
                </h2>
            </div>


            <div >
                <h2 className='text-2xl font-bold text-red-700'>4. React vs. Angular vs. Vue?</h2>
                <h2 className=''> <br /> <span className='font-bold'>&gt;&gt;&gt;&gt;&gt;</span> <br />
                    <span className='text-xl'>The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either. <br />
                        Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage. <br />
                        Overall, Vue might be the best choice if you’re a newer developer and not as familiar with advanced JavaScript concepts, while React is quite well suited for experienced programmers and developers who have worked with object-oriented JavaScript, functional JavaScript, and similar concepts.
                    </span>
                </h2>
            </div> */}


        </div>
    );
};

export default Blog;