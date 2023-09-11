import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';
import axiosRateLimit from 'axios-rate-limit';
import { API_KEY } from '@env';
import MotivationalQuotesStyle from './MotivationalQuotesStyle'


const axiosWithRateLimit = axiosRateLimit(axios.create(), { maxRequests: 1, perMilliseconds: 5000 });

const MotivationalQuotes = () => {

    const [quote, setQuote] = useState('');

    const generateQuote = async () => {
        try {
            const apiKey = API_KEY
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
            };

            const response = await axiosWithRateLimit.post(

                "https://api.openai.com/v1/chat/completions",
                {
                    model: "gpt-3.5-turbo",
                    messages: [
                        {
                            role: "system",
                            content: "Retorne uma frase motivacional. Resuma sua resposta apenas a frase"
                        }
                    ],
                    temperature: 1,

                },
                config
            );

            if (response.ok) {
                throw new Error('Erro na solicitação à API');
            }

            const generatedQuote = response?.data?.choices[0]?.message?.content;
            setQuote(generatedQuote);

        } catch (error) {
            console.error('Erro ao gerar frase motivacional:', error);
        }
    };

    // Chamamos generateQuote quando o componente é montado (usando useEffect)
    useEffect(() => {
        generateQuote();
    }, []);

    return (
        <View style={MotivationalQuotesStyle.container}>
            <Text style={MotivationalQuotesStyle.title}>Frase do Dia:</Text>
            <Text style={MotivationalQuotesStyle.quote}>{quote}</Text>

        </View>
    );
};

export default MotivationalQuotes;
