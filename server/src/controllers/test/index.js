export const testFunction = (req, res) => {
    console.log('Hit test');
    res.status(200).send('This is a test');
}
