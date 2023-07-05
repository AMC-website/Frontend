function WhyUs() {
    return;
    <Box
        height="auto"
        position="relative"
        textAlign="left"
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginLeft="auto"
        marginRight="auto"
    >
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: breakPoint2 ? 'row' : 'column',
                width: '100%',
            }}
        >
            <div
                style={{
                    width: breakPoint2 ? '60%' : 'auto',
                }}
            >
                <Typography
                    variant="h1"
                    color={titleColor}
                    fontSize={`${breakPoint ? '48px' : '40px'}`}
                >
                    Why us?
                </Typography>

                <br />
                <Typography
                    variant="h3"
                    lineHeight="2"
                    color={color}
                    margin="0 auto"
                >
                    Sponsor AMC to fuel innovation and creativity. Your support
                    drives cutting-edge aviation and engineering projects,
                    empowering talented students.
                    <br />
                    <br />
                    Invest in <b>education</b>, make an <b>impact</b>, and{' '}
                    <b>connect with</b> future industry <b>leaders</b>.
                </Typography>
            </div>
            <div
                style={{
                    width: breakPoint2 ? '40%' : '100%',
                    display: 'flex',
                    flexDirection: breakPoint2 ? 'column' : 'row',
                    justifyContent: 'space-between',
                }}
            >
                <img
                    src="flight2.jpg"
                    alt="drone image"
                    style={{
                        objectFit: 'cover',
                        height: breakPoint2 ? '100%' : '100%',
                        width: breakPoint2 ? '100%' : '100%',
                        borderRadius: '5px',
                    }}
                />
            </div>
        </div>
    </Box>;
}
