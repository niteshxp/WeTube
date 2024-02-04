const GOOGLE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const YOUTUBE_API_VIDEOS =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;


export const YOUTUBE_SEARCH_API =
    'https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='

// export const CATEGORIES_API = "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=" + API_KEY;

export const YOUTUBE_VIDEO_WATCH_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`;

// export const YOUTUBE_VIDEO_RECOMENDED_LIST_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&key=${GOOGLE_API_KEY}&relatedToVideoId=`;

export const YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${GOOGLE_API_KEY}&q=`;




export const imgMenu = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///90d3lxdHZtcHJqbW/AwcHk5eWVmJlnam1rbnCpq6yBhIb5+fnHyMng4eH29veKjI6ztLWipKV5fH6OkZLZ2tvq6+vLzMy5u7zIycnR0tLCw8OanJ7n5uYQAAACyUlEQVR4nO3di27iMBCFYcfOFodbEiBAgfd/ziXQSlvJNqkWCc3h/54gR3ac1p4xzgEAAAAAAAAAAAAAAAAoa4fVH2tWQzs13vK4qJtgT1MvjsspAfsYfGWTD7F/mG+/Da9+zv8StvtywKG2On7ffD2UAn7EVz/gE8SPfMCl7Rn6LeTXm5n1KXrnZ7mAa4U5Oopr7SHMD2KrMoTXQUz/eXPQWGdG4ZBMOFeZpNdpOk8m3Akl3CUTLoQSLt40YSeUsEsm3Agl3CQTnoW+Fudkwr3QFz/zT6LMUpNZaJw71a9+tCepT5mEKoOYHUKZNzH3Fo7OChFjeiH9crQfMR5LAZ37jLbfRR8/ywGv72JneEPR192D7dKbYReb4O0JTdwV90r/0Z76zcyaTX+afDQDAAAAAAAAAAAAYDL180P1M2D5c/yV+VqMVTmgfD2NfE2UROtasXlNvjbxIFNfmm6ZkRnC/CCKVJeOMhWm+rX6+v0W+j0zMgvNG3d26fcf6veQ6vcB6/dy6/fjv8GdCiqDmL8X4w3uNtH4J790P41zg/GttnGz7cGeqfw9UU7/ri93u68tmryvLU68r23UDquzNb+4cw8AAAAAAAAAAADAdKd5V726i+nXqm6evSD5p2UfGm/xnNv7JvQTDoFXwXKpQggP2p6cu1ivqImXcsCd5QG8C+nq2S8b+wGvEdOF+jcn61P0LubXVIsraIrPBTwqzNFRyDVZvvrBnigdcK3SnFdVdbpIWGaSZqfpRWWhuS416c8+nV2GvG1nl0gvwijTj9ALraXpYuihefWDPU2TqdcX+uKnA+o0IGbaD51rVQaxzta0i6w1mXXmRuKTWPhRMueWlf2IviruKLbG257GxqdHjSUX091r/tFm4mhYRJNb3uOmd1xM+0mr9Xzb1PY023mxt/Kn5f7Dmv3kvjUAAAAAAAAAAAAAUPUXCyx+ltjBidoAAAAASUVORK5CYII='

export const imgYT = 'data:image/png;base64,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'