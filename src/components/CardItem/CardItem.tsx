import React, { useCallback, useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useStyles } from "./CardItem.styles";
import { Dog } from "../../interfaces/cars";
import { Image } from "../common/Image";
import { toggleFavorite, isFavorite } from "../../services/favorites";

export const CardItem: React.FC<Dog> = ({
  breeds: [{ name, bred_for, temperament }],
  id,
  url,
}: Dog) => {
  const [isItemFavorite, setIsItemFavorite] = useState(isFavorite(id));
  const [isContentVisible, setIsContentVisible] = useState(false);
  const classes = useStyles();
  const handleFavoriteClick = useCallback(() => {
    toggleFavorite(id);
    setIsItemFavorite(!isItemFavorite);
  }, [isItemFavorite, id]);

  const showContent = useCallback(() => {
    setIsContentVisible(true);
  }, [setIsContentVisible]);

  const hideContent = useCallback(() => {
    setIsContentVisible(false);
  }, [setIsContentVisible]);
  return (
    <Card
      className={classes.root}
      elevation={10}
      onMouseEnter={showContent}
      onMouseLeave={hideContent}
    >
      <Image src={url} width="100%" />
      {isContentVisible && (
        <Box className={classes.content}>
          <Box className={classes.text}>
            <CardHeader title={name} />
            <Box className={classes.dash} mb={2} />
            <Typography>{bred_for}</Typography>
          </Box>
          <Box mt={2}>
            <Button
              onClick={handleFavoriteClick}
              color="secondary"
              variant={isItemFavorite ? "contained" : "outlined"}
            >
              Favorite
            </Button>
          </Box>
        </Box>
      )}
    </Card>
  );
};
