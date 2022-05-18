import Badge from '../../../components/Core/Badge';
import {
    CardContainer,
    CardImageContainer,
    CardInfoContainer,
    CardInfoContainerContent,
    CardInfoContainerHeader,
    CardInfoHeaderTitle,
    CardMovieDate,
    CardMovieDescription,
    CardMovieName,
    CardRate,
    MovieGenderContainer,
} from './styled';

type Props = {};

export default function MovieResultCard({}: Props) {
    return (
        <CardContainer>
            <CardImageContainer />
            <CardInfoContainer>
                <CardInfoContainerHeader>
                    <CardRate percentage={20} />

                    <CardInfoHeaderTitle>
                        <CardMovieName>Thor: Ragnarok</CardMovieName>
                        <CardMovieDate>23/04/2002</CardMovieDate>
                    </CardInfoHeaderTitle>
                </CardInfoContainerHeader>

                <CardInfoContainerContent>
                    <CardMovieDescription>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, placeat nostrum esse
                        reprehenderit ipsa id laborum ad, accusantium alias quidem maiores fuga nam, dolorum vero
                        exercitationem ea deleniti magnam suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dicta, placeat nostrum esse reprehenderit ipsa id laborum ad, accusantium alias quidem
                        maiores fuga nam, dolorum vero exercitationem ea deleniti magnam suscipit.
                    </CardMovieDescription>

                    <MovieGenderContainer>
                        <Badge>Ação</Badge>
                        <Badge>Aventura</Badge>
                        <Badge>Romance</Badge>
                        <Badge>Mistério</Badge>
                    </MovieGenderContainer>
                </CardInfoContainerContent>
            </CardInfoContainer>
        </CardContainer>
    );
}
