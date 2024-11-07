import React, { useState } from 'react';
import {
  Box,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  FormGroup,
  Select,
  MenuItem,
  Button,
} from '@mui/material';

const StudentInfoInputTab: React.FC = () => {
    const [gender, setGender] = useState('');
    const [subjects, setSubjects] = useState<string[]>([]);
    const [committee, setCommittee] = useState('');

    const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGender(event.target.value);
    };

    const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.name;
        setSubjects((prev) =>
        prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]
        );
    };

    const handleCommitteeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setCommittee(event.target.value as string);
    };

    const handleAdd = () => {
        // データを保存するなどの処理を追加
        console.log({ gender, subjects, committee });
    };
    
    return (
        <Box mt={2}>
            <TextField fullWidth label="名前" variant="outlined" />

            <FormControl component="fieldset" margin="normal">
                <FormLabel component="legend">性別</FormLabel>
                <RadioGroup row value={gender} onChange={handleGenderChange}>
                    <FormControlLabel value="男性" control={<Radio />} label="男性" />
                    <FormControlLabel value="女性" control={<Radio />} label="女性" />
                </RadioGroup>
            </FormControl>

            <FormControl component="fieldset" margin="normal">
                <FormLabel component="legend">得意科目</FormLabel>
                <FormGroup row>
                {
                    ['国語', '数学', '社会', '理科', '英語'].map((subject) => (
                        <FormControlLabel
                            key={subject}
                            control={
                                <Checkbox
                                    checked={subjects.includes(subject)}
                                    onChange={handleSubjectChange}
                                    name={subject}
                                />
                            }
                            label={subject}
                        />
                    ))
                }
                </FormGroup>
            </FormControl>

            <FormControl fullWidth margin="normal">
                <FormLabel component="legend">委員</FormLabel>
                <Select value={committee} onChange={handleCommitteeChange} displayEmpty>
                    <MenuItem value="">
                        <em>選択してください</em>
                    </MenuItem>
                    {
                        ['図書', '保健', '体育', '風紀', '文化'].map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))
                    }
                </Select>
            </FormControl>

            <Box mt={2} textAlign="right">
                <Button variant="contained" color="primary" onClick={handleAdd}>
                追加
                </Button>
            </Box>
        </Box>
    );
};

export default StudentInfoInputTab;
