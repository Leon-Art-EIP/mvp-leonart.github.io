import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ChevronRightRounded from "@material-ui/icons/ChevronRightRounded";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useWideCardMediaStyles } from "@mui-treasury/styles/cardMedia/wide";
import { useN01TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n01";
import { useBouncyShadowStyles } from "@mui-treasury/styles/shadow/bouncy";
import Star from "./assets/star";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 504,
    width: 600,
    margin: "auto",
    boxShadow: "none",
    borderRadius: 30
  },
  content: {
    padding: 24
  },
  cta: {
    marginTop: 24,
    textTransform: "initial"
  }
}));

/*interface CardNews {
  hasImg?:boolean;
  srcImg: string;
  width?: number;
  hasTitle?: boolean;
  title: string;
  hasDescription?: boolean;
  description: string;
  hasStars?: boolean;
  hasLink?: boolean;
  borderRadius?: number;
}*/

/*defaultProps {
  width: 400,
  borderRadius: 30,
  hasTitle: false,
  hasStars: false,
  hasImg: false,
  hasLink: false,
}*/
export const NewsCardDemo = React.memo(function NewsCard() {
  const styles = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const shadowStyles = useBouncyShadowStyles();
  const n = 6;

  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        classes={mediaStyles}
        image={
          "https://img.freepik.com/premium-photo/trendy-modern-artwork-contemporary-art-collage-sport-office-concept_489646-20518.jpg?w=1800"
        }
      />
      <CardContent className={styles.content}>
        {[...Array(n)].map((e, i) => (
          <span key={i}>
            <Star height="20px" />
          </span>
        ))}
        {/*<Star height="20px" />
        <Star height="20px" />
        <Star height="20px" />
        <Star height="20px" />
      <Star height="20px" />*/}
        <TextInfoContent
          classes={textCardContentStyles}
          //overline={"March 20, 2019"}
          heading={"La danse du feu dans la nuit"}
          body={
            "En créant cette oeuvre, j'ai voulu montrer tout le potentiel du feu lorsqu'il est présent dans son élément contraire, le bleu froid profond"
          }
        />
        <Button color={"primary"} fullWidth className={styles.cta}>
          Découvrir l'oeuvre <ChevronRightRounded />
        </Button>
      </CardContent>
    </Card>
  );
});

export default NewsCardDemo;
