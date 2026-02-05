
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CheckIcon } from 'lucide-react';

export const Select = ({options,                      // 選項列表
                        selectedOption,               // 已選取的選項（useState）
                        setSelectedOption,            // 設定選項的函數（useState）
                        withIcon = false,             // 是否顯示項目 Icon
                        iconDir = "tag-icons",        // 項目 Icon 資料夾路徑
                        boxClassName = 'overflow-hidden',     // SelectBox 排版屬性
                        textClassName = "",                   // 文字屬性
                        dropDownClassName = "!bg-muted/60 backdrop-blur-md border border-border !text-secondary-foreground/90 shadow-2xl ",      // 下拉選單屬性
                        lineColors = {primaryColor: "white", secondaryColor: "beige"},   // SelectBox 線條屬性
                        placeholder,                  // Placeholder
                        label = "Select"              // 選單標籤文字
                      }) => {
  return (
    <Autocomplete
        multiple
        limitTags={3}
        value={selectedOption}
        onChange={(event, newValue) => {
          // newValue 為 null 時，代表使用者點了清除按鈕
          setSelectedOption(newValue);
        }}
        className={boxClassName}
        id="tags-standard"
        options={options}
        getOptionLabel={(option) => option.title || ""}
        defaultValue={[options[0]]}
        slotProps={{
          chip: {
            // 💡 這裡可以直接控制 Chip 的基礎屬性
            variant: "outlined", // 使用線條模式
            sx: {
              // 1. 修改 Chip 的邊框顏色
              borderColor: `${lineColors.primaryColor}88 !important`, 
              // 2. 修改文字顏色
              color: lineColors.primaryColor,
              // 3. 修改背景（為了玻璃感，可以加點半透明）
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              // 4. 關鍵：修改「叉叉 (Delete Icon)」的顏色
              "& .MuiChip-deleteIcon": {
                color: `${lineColors.primaryColor}60`, // 讓叉叉稍微淡一點
              },
              "& .MuiChip-deleteIcon:hover": {
                color: lineColors.secondaryColor, // 懸停時變色
                opacity: 1,
              },
              // 5. 圓角設定
              borderRadius: "16px",
            }
          },
          popper: {
            // 💡 popper 控制選單的位置和容器
            className: "z-[1300]", // 確保在最上層
          },
          paper: {
            // 💡 paper 是選單那塊「肉」，在這裡設定背景
            className: dropDownClassName,
          }
        }}
        sx={{

          // 修改未聚焦時的底線顏色 (Before)
          '& .MuiInput-underline:before': {
            borderBottomColor: lineColors.primaryColor, // 淡淡的白色
          },

          // 修改懸停 (Hover) 時的底線顏色
          '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottomColor: lineColors.secondaryColor, 
          },

          // 修改聚焦 (Focused) 時的底線顏色 (After)
          '& .MuiInput-underline:after': {
            borderBottomColor: lineColors.secondaryColor,
          },

          // 讓箭頭顏色使用傳入的 primary line color
          '& .MuiAutocomplete-popupIndicator': {
            color: lineColors.primaryColor, // 預設使用你設定的 primaryColor
          },

          '& .MuiInputBase-root': {
            paddingBottom: '4px !important', // 增加底部間距，讓標籤離底線遠一點,
            gap: '4px', // 調整標籤之間的間距
          },

          '& .MuiChip-root': {
            height: '28px', // 預設通常是 32px，改小一點
            fontSize: '0.8125rem', // 字體稍微縮小更精緻
            margin: '2px', // 標籤的外邊距
          },
          // 💡 調整 Chip 內部的 Padding (左右)
          '& .MuiChip-label': {
            paddingLeft: '12px',
            paddingRight: '12px',
          },
        }}
        
        renderOption={(props, option, { selected }) => {
          const { key, ...optionProps } = props;
          return (
            <Box
              key={key}
              component="li"
              {...optionProps}
              sx={{
                // 💡  Highlight 的關鍵
                backgroundColor: selected ? `${lineColors.secondaryColor}20 !important` : 'transparent', 
                color: selected ? `${lineColors.secondaryColor} !important` : 'inherit',
                fontWeight: selected ? 'medium' : 'normal',
                display: 'flex !important',
                alignItems: 'center',
                justifyContent: 'space-between !important', // 讓文字跟勾勾分開
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.08) !important',
                }
              }}
            >
              <Box sx={{ 
                          display: 'flex !important', 
                          alignItems: 'center', 
                        }}>
                {withIcon && option.title && (
                  <div className="mr-2 flex h-6 w-6 items-center justify-center rounded bg-white/30 p-1">
                    <img
                      loading="lazy"
                      src={`${iconDir}/${option.title.toLowerCase()}.png`}
                      alt=""
                    />
                  </div>
                )}
                {option.title}
              </Box>

              {/* 💡 右側好看的勾勾 */}
              {selected && (
                <CheckIcon 
                  sx={{ 
                    fontSize: '1.2rem', 
                    color: lineColors.secondaryColor,
                    // 這裡可以加一點點發光效果
                    filter: `drop-shadow(0 0 2px ${lineColors.secondaryColor}88)` 
                  }} 
                />
              )}
            </Box>
          );
        }}

        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label={label}
            placeholder={placeholder}
            slotProps={{
              input: {
                ...params.InputProps,
                className: textClassName,
              },
              inputLabel: {
                className: textClassName, // 讓上方的 Label 變色
              },
              htmlInput: {
                ...params.inputProps,
                className: `placeholder:${textClassName} opacity-70`, // 讓 Placeholder 也變色
              }
            }}
          />
        )}
      />
  )
}