export const HAPPY_BUTTON_CLICKED = "happy_button_clicked";
export const SAD_BUTTON_CLICKED = "sad_button_clicked";
export const CLEAR_HAPPY_MOMENTS = "CLEAR_HAPPY_MOMENTS";
export const CLEAR_SAD_MOMENTS = "CLEAR_SAD_MOMENTS";

export const happyButtonClicked = (count: number,when:Date) => ({
    type: HAPPY_BUTTON_CLICKED,
    payload: {count,when},
});

export const sadButtonClicked = (count: number,when:Date) => ({
    type: SAD_BUTTON_CLICKED,
    payload: {count,when},
});
export const clearHappyMoments = () => ({
    type: CLEAR_HAPPY_MOMENTS,
});

export const clearSadMoments = () => ({
    type: CLEAR_SAD_MOMENTS,
});

