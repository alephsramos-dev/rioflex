import styled from "@emotion/styled";
import { down } from "@styles/media";
import { Star, Quotes } from "@phosphor-icons/react/dist/ssr";

const Card = styled.div`
    width: 100%;
    background: ${(props) => props.theme.colors.base.white};
    border-radius: 24px;
    padding: 28px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
    border: 2px solid ${(props) => props.accentColor || props.theme.colors.neutral[200]};
    position: relative;
    transition: transform 200ms ease, box-shadow 200ms ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
    }

    ${down("tablet")} {
        padding: 24px;
    }
`;

const QuoteIcon = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    color: ${(props) => props.accentColor || props.theme.colors.neutral[300]};
    opacity: 0.2;

    ${down("tablet")} {
        top: 16px;
        right: 16px;
    }
`;

const Stars = styled.div`
    display: flex;
    gap: 4px;
    color: rgb(255, 193, 7);
`;

const Text = styled.p`
    font-size: 16px;
    line-height: 1.6;
    color: ${(props) => props.theme.colors.neutral[700]};
    font-style: italic;

    ${down("tablet")} {
        font-size: 15px;
    }
`;

const AuthorSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-top: 8px;
    border-top: 1px solid ${(props) => props.theme.colors.neutral[200]};
`;

const AuthorName = styled.h4`
    font-size: 16px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.neutral[900]};
    margin: 0;
`;

const AuthorRole = styled.span`
    font-size: 14px;
    color: ${(props) => props.theme.colors.neutral[500]};
`;

const Tags = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-top: 4px;
`;

const Tag = styled.span`
    font-size: 12px;
    color: ${(props) => props.accentColor || props.theme.colors.primary.main};
    font-weight: 600;
`;

export default function TestimonialCard({
    rating = 5,
    text = "",
    author = "",
    role = "",
    tags = [],
    accentColor = "rgb(24, 179, 90)"
}) {
    return (
        <Card accentColor={accentColor}>
            <QuoteIcon accentColor={accentColor}>
                <Quotes size={48} weight="fill" />
            </QuoteIcon>
            <Stars>
                {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} size={20} weight="fill" />
                ))}
            </Stars>
            <Text>"{text}"</Text>
            <AuthorSection>
                <AuthorName>{author}</AuthorName>
                <AuthorRole>{role}</AuthorRole>
                {tags.length > 0 && (
                    <Tags>
                        {tags.map((tag, i) => (
                            <Tag key={i} accentColor={accentColor}>
                                {tag}
                            </Tag>
                        ))}
                    </Tags>
                )}
            </AuthorSection>
        </Card>
    );
}
