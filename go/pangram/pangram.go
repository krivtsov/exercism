package pangram

import (
	"strings"
)

func IsPangram(input string) bool {
	alphabet := "abcdefghijklmnopqrstuvwxyz"
	for _, letter := range alphabet {
		if !strings.ContainsRune(strings.ToLower(input), letter) {
			return false
		}
	}
	return true
}
