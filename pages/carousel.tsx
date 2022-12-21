import { Carousel } from '@mantine/carousel';
import { Button, createStyles, Paper } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons';
import styles from '../styles/Carousel.module.scss';

const useStyles = createStyles((theme) => ({
  card: {
    height: 440,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  url: string;
}

function Card({ url }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${url})` }}
      className={classes.card}
    >
      <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} color="dark">
        <IconExternalLink size={16} stroke={1.5} onClick={() => window?.open(url, '_blank')?.focus()}>
          <a href={url} target="_blank" rel="noreferrer"></a>
        </IconExternalLink>
      </Button>
    </Paper >
  );
}


export default function CardsCarousel({ images }: any) {
  const slides = images?.map((image: { url: string }, index: number) => (
    <Carousel.Slide key={index}>
      <Card url={image.url} />
    </Carousel.Slide>
  ));

  return (
    <div className={styles.carousel}>
      <Carousel
        slideSize="100%"
        breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
        slideGap="xl"
        align="start"
        slidesToScroll={1}
        loop
      >
        {slides}
      </Carousel>
    </div>
  );
}