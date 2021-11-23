import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const EventGenre = ({ events }) => {
    const [data, setData] = useState([]);

    const colors = ['#10B6E4', '#E5981F', '#FF3C38', '#F3D9DC', '#90FFDC'];
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];

    const getData = () => {
        return genres.map((genre) => {
            const value = events.filter(({ summary }) => summary.split(' ').includes(genre)).length;
            return { name: genre, value: value };
        }).filter((summary) => summary.value);
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