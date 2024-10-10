import sensors from 'sa-sdk-javascript';

function getSensorsUrl(): string {
  return 'https://sc.biliangwang.com:8106/sa?project=production';
}

if (sensors && window) {
  const trackUrl = getSensorsUrl();
  sensors.init({
    server_url: trackUrl,
    heatmap: { clickmap: 'default', scroll_notice_map: 'not_collect' },
  });

  // sensors.quick('autoTrack');
}

export default sensors;
