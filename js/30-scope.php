<?php
    class Difference{
    private $elements=array();
    public $maximumDifference;

// Write your code here
    function __construct ($elements) {
        
        foreach ($elements as $element => $value) {
            $this->elements[] = $elements[$element];
        }
    }

    function computeDifference() {
        $e = $this->elements;
        $this->maximumDifference = 0;
        foreach ($e as $key => $value) {
            $a = $e[$key];
            foreach ($e as $key => $value) {
                $b = $e[$key];
                if (($a - $b) > $this->maximumDifference) {
                    $this->maximumDifference = abs($a - $b);
                }
            }
        }
    }
    
} //End of Difference class  
     

$N=intval(fgets(STDIN));
$a =array_map('intval', explode(' ', fgets(STDIN)));
$d=new Difference($a);
$d->ComputeDifference();
print ($d->maximumDifference);
?>