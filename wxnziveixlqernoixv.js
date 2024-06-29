  const url = 'https://www.youtube.com/youtubei/v1/comment/create_comment?prettyPrint=false';

  const headers = {
    'authority': 'www.youtube.com',
    'accept': '*/*',
    'accept-language': 'en-US,en;q=0.6',
    'authorization': 'SAPISIDHASH 1719671879_17ca866c162dbaaabad4b83247972b04e73e499c',
    'content-type': 'application/json',
    'origin': 'https://www.youtube.com',
    'referer': `https://www.youtube.com/watch?v=uiFjfE1qjPk`,
    'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Brave";v="126"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-model': '""',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'same-origin',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    'x-goog-authuser': '0',
    'x-origin': 'https://www.youtube.com',
    'x-youtube-bootstrap-logged-in': 'true',
    'x-youtube-client-name': '1',
    'x-youtube-client-version': '2.20240628.01.00'
  };

  const payload = {
    context: {
      client: {
        hl: "id",
        gl: "ID",
        remoteHost: "103.183.99.120",
        deviceMake: "",
        deviceModel: "",
        visitorData: "Cgs5OHpIUElsXzRSQSiQuIC0BjIKCgJJRBIEGgAgWw==",
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36,gzip(gfe)",
        clientName: "WEB",
        clientVersion: "2.20240628.01.00",
        osName: "Windows",
        osVersion: "10.0",
        originalUrl: `https://www.youtube.com/watch?v=uiFjfE1qjPk`,
        platform: "DESKTOP",
        clientFormFactor: "UNKNOWN_FORM_FACTOR",
        userInterfaceTheme: "USER_INTERFACE_THEME_DARK",
        timeZone: "Asia/Jakarta",
        browserName: "Chrome",
        browserVersion: "126.0.0.0",
      },
      user: {
        lockedSafetyMode: false
      },
      request: {
        useSsl: true,
        internalExperimentFlags: [],
        consistencyTokenJars: []
      }
    },
    createCommentParams: `EgtuiFjfE1qjPkaioCCABQBw==`,
    commentText: commentText
  };

  return fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(payload),
    credentials: 'include'
  })
  .then(response => response.json())
  .then(data => {
    console.log('Komentar berhasil dikirim:', data);
    return data;
  })
  .catch(error => {
    console.error('Error mengirim komentar:', error);
    throw error;
  });
