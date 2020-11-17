const config = {
    s3: {
        REGION: "ap-northeast-2",
        BUCKET: "note-test",
    },
    apiGateway: {
        REGION: "ap-northeast-2",
        URL: "https://tr7l0qqnu9.execute-api.ap-northeast-2.amazonaws.com/prod",
    },
    cognito: {
        REGION: "ap-northeast-2",
        USER_POOL_ID: "ap-northeast-2_b33WBylQd",
        APP_CLIENT_ID: "4d6sr38ls79dp46b8kln75uh09",
        IDENTITY_POOL_ID: "ap-northeast-2:96bbe2fc-dae1-4b27-aede-9fbd03bf4de7",
    },
};

export default config;