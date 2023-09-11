import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';
import axiosRateLimit from 'axios-rate-limit';
import { API_BASE_URL, API_KEY } from '@env';


const axiosWithRateLimit = axiosRateLimit(axios.create(), { maxRequests: 1, perMilliseconds: 5000 });

const MotivationalQuotes = () => {
    const [quote, setQuote] = useState('');

    const generateQuote = async () => {
        try {
            const apiKey = API_KEY //"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";
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
                        },
                        {
                            role: "assistant",
                            content: "O sucesso é a soma de pequenos esforços repetidos dia após dia."
                        },
                        {
                            role: "assistant",
                        content: "Nada como um dia após o outro dia" 
                        },],
                    temperature: 0.8,

                },
                config
            );

            if (response.status !== 200) {
                throw new Error('Erro na solicitação à API');
            }

            const generatedQuote = response.data.choices[0].message?.content;
            console.log(response.data.choices[0].message?.content)
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
        <View>
            <Text>Frase do Dia:</Text>
            <Text>{quote}</Text>
            <Button title="Gerar Frase" onPress={generateQuote} />
        </View>
    );
};

export default MotivationalQuotes;
