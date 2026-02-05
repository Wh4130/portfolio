import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export const CenteredTabs = ({
  selectedTab,
  setSelectedTab,
  options,
  bgColor = "transparent",       // 1. 修改背景
  textColor = "inherit",         // 2. 修改文字顏色
  activeColor = "#00d2ff",       // 選中時的文字顏色（必須傳入色票，無法使用 tailwind css 屬性）
  indicatorColor = "#00d2ff",    // 3. 修改底線顏色（必須傳入色票，無法使用 tailwind css 屬性）
}) => {
  const handleSwitchTab = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ 
      width: '100%', 
      bgcolor: bgColor, // 使用傳入的背景色
      mb: 7 
    }}>
      <Tabs 
        value={selectedTab} 
        onChange={handleSwitchTab} 
        centered
        // 💡 關鍵：控制底線顏色
        slotProps={{
            indicator: {
              style: { backgroundColor: indicatorColor }
            }
          }}
        sx={{
          '& .MuiTabs-flexContainer': {
             // 可以在這裡加額外的容器樣式
          }
        }}
      >
        {/* Tab */}
        {options.map((tab, idx) => (
          <Tab 
            key={idx} 
            label={tab} 
            sx={{
              color: textColor, // 初始文字顏色
              textTransform: 'none', // 避免自動大寫
              fontWeight: 500,
              fontSize: '1rem',
              // 💡 關鍵：控制「選中」狀態下的文字顏色
              '&.Mui-selected': {
                color: activeColor,
              },
              transition: 'all 0.3s ease',
              borderRadius: '10px', // 圓角藥丸感,
              padding: '4px', // 讓內容縮進去，像一個凹槽
            
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
}