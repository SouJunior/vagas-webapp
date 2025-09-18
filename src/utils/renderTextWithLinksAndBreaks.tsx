import ParagraphSm from '../components/Ui/ParagraphSm';

const renderTextWithLinksAndBreaks = (text: string) => {
  return text.split('\n').map((line, index) => {
    const linkMatch = line.match(/(https?:\/\/[^\s]+)/);

    if (linkMatch) {
      const lineWithoutLink = line.replace(linkMatch[0], '');

      return (
        <ParagraphSm key={index}>
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
        </ParagraphSm>
      );
    }

    return <ParagraphSm key={index}>{line}</ParagraphSm>;
  });
};

export default renderTextWithLinksAndBreaks;
