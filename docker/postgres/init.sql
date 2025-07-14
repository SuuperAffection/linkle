
BEGIN;

-- user_account テーブルの作成
CREATE TABLE public.User_Account (
    id bigint NOT NULL,
    displayName text NOT NULL,
    userId text NOT NULL UNIQUE,
    pw text NOT NULL,
    techs text,
    department text,
    comment text,
    deleteFlag boolean NOT NULL DEFAULT FALSE,
    createUser bigint,
    updateUser bigint,
    creation timestamp without time zone NOT NULL,
    modification timestamp without time zone NOT NULL,
    version bigint NOT NULL
);

CREATE  SEQUENCE UserAccountSeq;

-- session テーブルの作成
CREATE TABLE public.Session (
    fkUser bigint NOT NULL,
    token text NOT NULL,
    expiration timestamp without time zone NOT NULL,
    createUser bigint,
    updateUser bigint,
    creation timestamp without time zone NOT NULL,
    modification timestamp without time zone NOT NULL,
    version bigint NOT NULL
);

CREATE SEQUENCE SessionSeq;

-- post テーブル作成
CREATE TABLE public.Post (
    id bigint NOT NULL,
    title text NOT NULL,
    mainText text NOT NULL,
    techs text NOT NULL,
    contactTool text NOT NULL,
    position text NOT NULL,
    expiration timestamp without time zone NOT NULL,
    deleteFlag boolean NOT NULL DEFAULT FALSE,
    createUser bigint,
    updateUser bigint,
    creation timestamp without time zone NOT NULL,
    modification timestamp without time zone NOT NULL,
    version bigint NOT NULL
);

CREATE SEQUENCE PostSeq;

--Bookmark テーブル作成
CREATE TABLE public.Bookmark (
    id bigint NOT NULL,
    fkUser bigint NOT NULL,
    fkPost bigint NOT NULL,
    createUser bigint,
    updateUser bigint,
    creation timestamp without time zone NOT NULL,
    modification timestamp without time zone NOT NULL
);

CREATE SEQUENCE BookmarkSeq;

-- 初期データ挿入

INSERT INTO user_account(
    id,
    displayName,
    userId,
    pw,
    deleteFlag,
    creation,
    modification,
    version
) VALUES (
    NEXTVAL('UserAccountSeq'),
    'テストユーザ',
    'test',
    'pass',
    false,
    NOW(),
    NOW(),
    0
);

INSERT INTO user_account(
    id,
    displayName,
    userId,
    pw,
    deleteFlag,
    creation,
    modification,
    version
) VALUES (
    NEXTVAL('UserAccountSeq'),
    'テストユーザ2',
    'test2',
    'pass',
    false,
    NOW(),
    NOW(),
    0
);

INSERT INTO post(
    id,
    title,
    mainText,
    techs,
    contactTool,
    position,
    expiration,
    deleteFlag,
    createUser,
    updateUser,
    creation,
    modification,
    version
) VALUES (
    NEXTVAL('PostSeq'),
    'ハッカソンのチームメンバー募集',
    $$
    6月21日にあるサポーターズ主催のハッカソンに参加する予定です。
    作るものはまだ決めていないので、みんなでアイデアを出しながら制作したいと思っています。
    $$,
    'Next.js / React / TypeScript',
    'teams',
    'フロントエンド',
    NOW() + INTERVAL '10 days',
    FALSE,
    2,
    2,
    NOW(),
    NOW(),
    0
);

COMMIT;