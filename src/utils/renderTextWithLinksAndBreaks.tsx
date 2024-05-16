const renderTextWithLinksAndBreaks = (text: string) => {
    return text.split('\n').map((line, index) => {
        const linkMatch = line.match(/(https?:\/\/[^\s]+)/);

        if (linkMatch) {
            const lineWithoutLink = line.replace(linkMatch[0], '');

            return (
                <p key={index}>
                    {lineWithoutLink}
                    <a
                        href={linkMatch[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Seja redirecionado para ${linkMatch[0]}`}
                        style={{ color: '#2E90FA' }}
                    >
                        {linkMatch[0]}
                    </a>
                </p>
            );
        }

        return <p key={index}>{line}</p>;
    });
};

export default renderTextWithLinksAndBreaks;
