/*eslint-disable*/
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";

const config = {
    botName: "LearningBot",
    initialMessages: [createChatBotMessage('Hello. What do you want to learn', {
        widget: "options"
    })],
    widgets: [{
        widgetName: "options",
        widgetFunc: (props) => <Options  {...props}/>
        // mapStateToProps: ["gist"]
    },{
        widgetName: "javascriptQuiz",
        widgetFunc: (props) => <Quiz {...props}/>,
        props: {
            questions: [
                {
                    question: "What is closure",
                    answer: "Closure is a way for a function to retain access to it's enclosing function scope after",
                    id:1
                },{
                    question: "Explain prototypal inheritance",
                    answer: "Prototypal inheritance is alink between an object and ab object store that holds",
                    id: 2
                }
            ]
        }
    }]
}

export default config;