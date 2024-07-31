const formatTimeAgo = (dateString: string): string => {
    const now = new Date().getTime();
    const postDate = new Date(dateString).getTime();
    const diffInSeconds = Math.floor((now - postDate) / 1000);

    const timeUnits = [
        { unit: 'mês', seconds: 2592000 },
        { unit: 'semana', seconds: 604800 },
        { unit: 'dia', seconds: 86400 },
        { unit: 'hora', seconds: 3600 },
        { unit: 'minuto', seconds: 60 },
    ];

    for (const { unit, seconds } of timeUnits) {
        if (diffInSeconds >= seconds) {
            const count = Math.floor(diffInSeconds / seconds);
            return `${count} ${unit}${count > 1 ? 's' : ''} atrás`;
        }
    }

    return `${diffInSeconds} segundo${diffInSeconds > 1 ? 's' : ''} atrás`;
};

export default formatTimeAgo;
