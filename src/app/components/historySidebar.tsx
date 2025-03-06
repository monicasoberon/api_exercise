import React from 'react';

interface HistoryPerson {
    id: number;
    name: string;
    description: string;
}

interface HistorySidebarProps {
    people: HistoryPerson[];
    onSelectPerson: (id: number) => void;
}

const HistorySidebar: React.FC<HistorySidebarProps> = ({ people, onSelectPerson }) => {
    return (
        <div className="history-sidebar">
            <h2>History People</h2>
            <ul>
                {people.map(person => (
                    <li key={person.id} onClick={() => onSelectPerson(person.id)}>
                        <h3>{person.name}</h3>
                        <p>{person.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HistorySidebar;