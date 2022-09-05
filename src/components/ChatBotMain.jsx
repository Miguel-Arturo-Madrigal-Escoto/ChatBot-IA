import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { steps } from '../fixtures/steps';
import { theme } from '../theme/themes';
import React from 'react';


export const ChatBotMain = () => {

    return (
        <>
            <ThemeProvider theme={ theme }>
                <ChatBot
                    headerTitle="Anchor ChatBot"
                    // recognitionEnable={true}
                    steps={ steps } 
                    enableSmoothScroll
                    enableMobileAutoFocus
                    floating
                    speechSynthesis={{ enable: true, lang: 'en' }}
                />
            </ThemeProvider>
        </>
    )
}
