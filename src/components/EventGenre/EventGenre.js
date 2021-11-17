import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Line } from 'recharts';

const EventGenre = ({ events }) => {
    const [data, setData] = useState([]);

    const colors = ['#10B6E4', '#E5981F', '#FF3C38', '#F3D9DC', '#90FFDC'];
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];

    const getData = () => {
        let data = genres.map((genre) => {
            const value = events.filter(({ summary }) => summary.split(' ').includes(genre)).length;
            return { name: genre, value: value };
        });
        data = data.filter((summary) => summary.value);
        return data;
    };

    useEffect(() => { setData(() => getData()); }, [events]);

    return (
        <ResponsiveContainer height={400}>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                    {
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]} />
                        ))
                    }
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}

export default EventGenre;