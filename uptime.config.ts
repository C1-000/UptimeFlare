// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "AcoFork 的状态页",  // 可根据需要修改
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/afoim', label: 'GitHub' },
    { link: 'https://blog.acofork.com/', label: '博客' },
  ],
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    // 飞牛直连 (HTTPS on port 16666)
    {
      id: 'fn_direct',
      name: '飞牛直连',
      method: 'HEAD',
      target: 'https://fn.c1000.top:16666',
      statusPageLink: 'https://fn.c1000.top:16666',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
    },
    // 飞牛CDN
    {
      id: 'fn_cdn',
      name: '飞牛CDN',
      method: 'HEAD',
      target: 'https://fn.cdn.c1000.top',
      statusPageLink: 'https://fn.cdn.c1000.top',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
    },
    // Bitwarden 直连 (HTTPS on port 16666)
    {
      id: 'bitwarden_direct',
      name: 'Bitwarden直连',
      method: 'HEAD',
      target: 'https://bitwarden.c1000.top:16666',
      statusPageLink: 'https://bitwarden.c1000.top:16666',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
    },
    // Bitwarden CDN
    {
      id: 'bitwarden_cdn',
      name: 'Bitwarden CDN',
      method: 'HEAD',
      target: 'https://bitwarden.cdn.c1000.top',
      statusPageLink: 'https://bitwarden.cdn.c1000.top',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
    },
    // Lucky 直连 (HTTPS on port 16666)
    {
      id: 'lucky_direct',
      name: 'Lucky直连',
      method: 'HEAD',
      target: 'https://lucky.c1000.top:16666',
      statusPageLink: 'https://lucky.c1000.top:16666',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
    },
    // Lucky CDN
    {
      id: 'lucky_cdn',
      name: 'Lucky CDN',
      method: 'HEAD',
      target: 'https://lucky.cdn.c1000.top',
      statusPageLink: 'https://lucky.cdn.c1000.top',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
    },
    // OpenList 直连 (HTTPS on port 16666)
    {
      id: 'openlist_direct',
      name: 'OpenList直连',
      method: 'HEAD',
      target: 'https://openlist.c1000.top:16666',
      statusPageLink: 'https://openlist.c1000.top:16666',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
    },
    // OpenList CDN
    {
      id: 'openlist_cdn',
      name: 'OpenList CDN',
      method: 'HEAD',
      target: 'https://openlist.cdn.c1000.top',
      statusPageLink: 'https://openlist.cdn.c1000.top',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
    },
    // MCSMPanel 直连 (HTTPS on port 16666)
    {
      id: 'mcsm_direct',
      name: 'MCSMPanel直连',
      method: 'HEAD',
      target: 'https://mcsm.c1000.top:16666',
      statusPageLink: 'https://mcsm.c1000.top:16666',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
    },
    // MCSMPanel CDN
    {
      id: 'mcsm_cdn',
      name: 'MCSMPanel CDN',
      method: 'HEAD',
      target: 'https://mcsm.cdn.c1000.top',
      statusPageLink: 'https://mcsm.cdn.c1000.top',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
    },
    // BlueMap 直连 (HTTPS on port 16666)
    {
      id: 'bluemap_direct',
      name: 'BlueMap直连',
      method: 'HEAD',
      target: 'https://mcmap.c1000.top:16666',
      statusPageLink: 'https://mcmap.c1000.top:16666',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
    },
    // BlueMap CDN
    {
      id: 'bluemap_cdn',
      name: 'BlueMap CDN',
      method: 'HEAD',
      target: 'https://mcmap.cdn.c1000.top',
      statusPageLink: 'https://mcmap.cdn.c1000.top',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
    },
  ],
  notification: {
    // [Optional] Notification webhook settings, if not specified, no notification will be sent
    // More info at Wiki: https://github.com/lyc8503/UptimeFlare/wiki/Setup-notification
    webhook: {
      // [Required] webhook URL (example: Telegram Bot API)
      url: 'https://api.resend.com/emails',
      // [Optional] HTTP method, default to 'GET' for payloadType=param, 'POST' otherwise
      method: 'POST',
      // [Optional] headers to be sent
      headers: {
         'Authorization': 'Bearer ${env.RESEND_API_KEY}',
         'Content-Type': 'application/json'
      },
      // [Required] Specify how to encode the payload
      // Should be one of 'param', 'json' or 'x-www-form-urlencoded'
      payloadType: 'json',
      // [Required] payload to be sent
      // $MSG will be replaced with the human-readable notification message
      payload: {
        "from": "系统状态更新 <uptimeflare@update.2x.nz>",
        "to": ["acofork@foxmail.com"],
        "subject": "UptimeFlare 状态更新",
        "text": "$MSG"
      },
      // [Optional] timeout calling this webhook, in millisecond, default to 5000
      timeout: 10000,
    },
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: 'Asia/Shanghai',
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    //gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // 当任何监控的状态发生变化时，将调用此回调
      // 在这里编写任何 Typescript 代码

      // 注意：已在 webhook 中配置了 Resend 基础通知
      // 如果需要发送 HTML 邮件，请保留以下代码；如果只需简单文本通知，可以注释掉以下代码以避免重复通知。
      
      // 调用 Resend API 发送邮件通知 (高级 HTML 格式)
      // 务必在 Cloudflare Worker 的设置 -> 变量中配置: RESEND_API_KEY
      /* 
      if (env.RESEND_API_KEY) {
        try {
          const statusText = isUp ? '恢复正常 (UP)' : '服务中断 (DOWN)';
          const color = isUp ? '#4ade80' : '#ef4444'; // green-400 : red-500
          const subject = `[${statusText}] ${monitor.name} 状态变更通知`;
          
          // 尝试格式化时间
          let timeString = new Date(timeNow * 1000).toISOString();
          try {
            timeString = new Date(timeNow * 1000).toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });
          } catch (e) { }

          const htmlContent = `
            <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
              <h2 style="color: ${color};">${statusText}</h2>
              <p><strong>监控名称:</strong> ${monitor.name}</p>
              <p><strong>时间:</strong> ${timeString}</p>
              <p><strong>原因:</strong> ${reason}</p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
              <p style="font-size: 12px; color: #888;">来自 UptimeFlare 监控报警</p>
            </div>
          `;

          const resendPayload = {
            from: "系统状态更新 <uptimeflare@update.2x.nz>",
            to: ["acofork@foxmail.com"],
            subject: subject,
            html: htmlContent,
          };

          const resp = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${env.RESEND_API_KEY}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(resendPayload)
          });

          if (!resp.ok) {
            console.error(`Resend API call failed: ${resp.status} ${await resp.text()}`);
          }
        } catch (e) {
          console.error(`Error calling Resend API: ${e}`);
        }
      }
      */
      
      // 这不会遵循宽限期设置，并且在状态变化时立即调用
      // 如果您想实现宽限期，需要手动处理
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // 如果任何监控有正在进行的事件，此回调将每分钟调用一次
      // 在这里编写任何 Typescript 代码
    },
  },
}

// You can define multiple maintenances here
// During maintenance, an alert will be shown at status page
// Also, related downtime notifications will be skipped (if any)
// Of course, you can leave it empty if you don't need this feature

const maintenances: MaintenanceConfig[] = []

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
