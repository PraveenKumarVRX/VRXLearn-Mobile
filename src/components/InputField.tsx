import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

function InputField({
  name,
  value = '',
  placeholder = '',
  onChangeText,
  icon,
  secureTextEntry = false,
  keyboardType = 'default',
  error,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = secureTextEntry;

  return (
    <View className="gap-2">
      {/* Label */}
      <Text className="text-h4 font-semibold">{name}</Text>

      {/* Input container */}
      <View
        className={`h-[54px] flex-row items-center rounded-lg border px-4 ${
          error ? 'border-red-500' : 'border-gray-400'
        }`}
      >
        {/* Left Icon */}
        <AntDesign name={icon} size={22} color="#333" />

        {/* Text Input */}
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#777"
          keyboardType={keyboardType}
          secureTextEntry={isPassword && !showPassword}
          className="ml-4 flex-1 text-base"
        />

        {/* Password Eye Icon */}
        {isPassword && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <AntDesign
              name={showPassword ? 'eye' : 'eye-invisible'}
              size={22}
              color="#333"
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Error */}
      {error && <Text className="text-sm text-red-500">{error}</Text>}
    </View>
  );
}

export default InputField;
